var express = require('express');
var router = express.Router();

var FB = require('fb');
var fs = require('fs');


var venues = [];
var events = [];
var venueEventsAdded = 0; //monitor for the venues that have been called by FB
var venueLength      = 0; //monitor for the venues that have been called by FB
var errorCounter     = 0; //monitor for the venues that do not accept the call
var emptyVenues      = 0; //monitor variable for venues with no events returned on request

//fbAPI: This variable contains functions dealing with FB Graph API
var fbAPI = {
 //A variable to store the events pulled out from FB.api call
 eventsUpdate: [],
 //A function that authenticates the app on FB
 //and allows for the further calls
 init: function () {
  FB.api('oauth/access_token', {
      client_id: '1633349693592514',                          //www
      client_secret: '1fee8e474d5e66265e5b303000fcbb41',      //www
      //client_id: '1658672054400703',                          //localhost
      //client_secret: 'a3c938534763bde12c388c89c22da4fa',      //localhost
      grant_type: 'client_credentials'
  }, function (res) {
      if(!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
      }   
      FB.setAccessToken(res.access_token);

      //After the FB access tocken is set this loop
      //makes an event request to all the places in the list
      for (var i=0; i<venues.length; i++) 
       {
        fbAPI.request(venues[i].venuePage);
       } console.log('Wait a bit, until I check ' + venues.length + " venues");
      //var accessToken = res.access_token;
  });
 },

 ready: function () {
 //Pushing some stats into the log
 console.log("Fine, but " + errorCounter + " venues have basically respondeded with: 'Fuck off, gringo'.");
 console.log("You may want to know, that " + errorCounter + " venues don't use events on the page.");

 //At this moment the array with events is pure mess
 //this function will fix it up for us
 fbAPI.eventsUpdate = fbAPI.clearDoubles(fbAPI.eventsUpdate);
 fsCalls.write ('events.txt', fbAPI.eventsUpdate);
 },

 //A function that makes a FB.api call
 request: function (venueName) { 
  FB.api(

   //The path requested from the FB.api (Graph API)
   venueName + '/events?limit=10000',

   //Callback function triggered when the result is returned
   function (res) {
    //CALLBACK: CHECK 1
    //There are many things that can go wrong with FB.api calls
    //this will fire if the results are error or not returned
    if( !res || res.error )
     {
       // uncomment follwoing if fb error note is needed
       //console.log(!res ? 'error occurred' : res.error); 
       errorCounter++;
       fbAPI.requestMonitor ();
       return;
     }

    //CALLBACK: CHECK 2
    //Result might come positive, but empty. If request was correct,
    //but the venue page owners do not use the venue events.
    if ( res.data.length == 0 )
     {
      emptyVenues++;
      fbAPI.requestMonitor ();
      return;
     }

    //CALLBACK: USE DATA
    //If request is positive the response (res) will be chopped in pieces by
    //this loop and each answer (aka individual event) will be added to the array.
    for ( var i=0; i<res.data.length; i++ ) fbAPI.addEvent (res.data[i]);
    
    fbAPI.requestMonitor ();
  });
 },

 requestMonitor: function () {
  venueLength--;
  //console.log ( "Left to call " + venueLength );
  if ( venueLength == venues.length - 1 ) console.log ( "Starting..." );
  if ( venueLength == 0 ) fbAPI.ready(); 
 },

 //This function deals with the response date,
 //adding each individual event into the final array.
 addEvent: function (data) {
  var placeName;
  var placeLocationLongitude;
  var placeLocationLatitude;
  var placeLocationStreet;

  var time;
  var minutes;
  var month;
  var months = [
  "January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October",
  "November", "December"];

  if (data.place === undefined ||
      data.place === null      ||
      data.place === "")
  {
    //console.log (data);
    placeName                = "Not sure where";
    placeLocationStreet      = "Somewhere in Helsinki";
  }
  else
  {
    placeName                = data.place.name;
    if (data.place.location != undefined)
    {
      placeLocationStreet    = data.place.location.street;
      placeLocationLongitude = data.place.location.longitude;
      placeLocationLatitude  = data.place.location.latitude;
      if (data.place.location.street === undefined) {
      placeLocationStreet    = "Somewhere in Helsinki";  
      }  
    }    
  };

  //add formated time mark for the HTML output
  time = new Date(data.start_time);
  month = months[time.getMonth()];
  minutes = time.getMinutes();
  if ( minutes == 0 ) minutes = "00";
  time = month+ " " + time.getDate() + ", " + time.getHours() + ":" + minutes;

  //push final event object to the general array
  fbAPI.eventsUpdate.push(
    {
     id: data.id,
     name: data.name.toLowerCase(),
     start_time: data.start_time,
     time: time,
     venue_name: placeName,
     venue_address: placeLocationStreet,
     //price: "0-100$"
    }
  );
 },

 //Delete duplicating elements in the array of objects (by the id attribute)
 //and sorts out the array <-- get out into another function
 clearDoubles: function (array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
   for(var j=i+1; j<a.length; ++j) {
    if(a[i].id == a[j].id)
     a.splice(j--, 1);
   }
  } 
  console.log ("Duplicates removed from the even list")
  a = fbAPI.sort (a);
  return a;
 },

 //Sorts array objects (by the start_time attribute)
 sort: function (array) {
  var a = array.concat();
  a.sort(function(a, b) {
   var c = new Date(a.start_time);
   var d = new Date(b.start_time);
   return c-d;
  });
  console.log ("Event list sorted out");
  return a;
 }

};
//fbAPI: end


//Functions that deal with the file system on the server
var fsCalls = {
 read: function (fileName, callback) {
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) return console.log(err);
    var storageVariable = JSON.parse(data);
    console.log ("I've just read " + storageVariable.length + " pages from " + fileName );
    if (typeof callback === "function")
     {
      callback(storageVariable);      
     }
    else console.log ("Oppse! Callback type is " + (typeof callback));
  });
 },
 write: function (fileName, data) {
  //Convers JSON event object into the string  that can be writter into the file
  var dataString = JSON.stringify(data);
  // Write into the file on the server
  fs.writeFile('events.txt', dataString , function (err) {
    if (err) return console.log(err);
    console.log("I've just written " + data.length + " pages into " + fileName );
  }); 
 }
};


//Prepare the output for the webpage
var output = {
 events: [],
 cashData: function () {
  output.events = fbAPI.clearDoubles(output.events);
  fsCalls.read ('events.txt',
   function (data) { 
    output.filter(data);
   });  
 },
 filter: function (data) {
  var check;
  var now = new Date();
  var time = now.getTime();
  console.log ("Output filter called on " + now);
  for (var i=0; i<data.length; i++)
   {
    //Comparing date of the event with current time
    check = time - (new Date(data[i].start_time)).getTime();
    if (check < 0)
     {
      output.events.push(data[i]);
     }
   } output.sort ();
 },
 //Delete duplicating elements in the array of objects (by the id attribute)
 //and sorts out the array <-- get out into another function
 clearDoubles: function (array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
   for(var j=i+1; j<a.length; ++j) {
    if(a[i].id == a[j].id)
     a.splice(j--, 1);
   }
  } 
  console.log ("Duplicates removed from the even list")
  a = fbAPI.sort (a);
  return a;
 },
 sort: function () {
  output.events = output.clearDoubles (output.events);
  output.events.sort(function(a, b) {
   var c = new Date(a.start_time);
   var d = new Date(b.start_time);
   return c-d;
  });
  console.log ("Output event list sorted out");
  console.log (" ");
  console.log (" ");
 },
};

//calling for the output variable generation
setInterval(function() { output.cashData(); }, 1000);


// GET home page
// Learn more https://youtu.be/FqMIyTH9wSg
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Moi Helsinki', allEvents: output.events });
  /*
  fsCalls.read ('events.txt',
   function (data) { 
    res.render('index', { title: 'Moi Helsinki', allEvents: data });
   });
  */
});

module.exports = router;


setInterval(function() { 
  //This function call will first read the existing files from the server
  //and then trigger the file updates with FB events.
  fsCalls.read ('events.txt',
   function (data) { 
    fbAPI.eventsUpdate = data;     // store old events in fbAPI.eventsUpdate
    fsCalls.read('venues.txt',
    function (data) { 
     venues = data;                // store venues in the venues
     venueLength = venues.length;
     fbAPI.init();                 // callback fbAPI.init() 
    })});
}, 3600000);


