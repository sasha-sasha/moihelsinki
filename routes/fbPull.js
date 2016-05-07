var express  = require('express')
var router   = express.Router()

var FB       = require('fb')
var fs       = require('fs')
var path     = require('path')

var appRoot        = path.resolve(__dirname, '..')
var eventsFilePath = path.join(appRoot, 'events.txt')
var venuesFilePath = path.join(appRoot, 'venues.txt')

var venues = []
var events = []

var venueEventsAdded = 0 //monitor for the venues that have been called by FB
var venueLength      = 0 //monitor for the venues that have been called by FB
var errorCounter     = 0 //monitor for the venues that do not accept the call
var emptyVenues      = 0 //monitor variable for venues with no events returned on request


// WARNING!
// This is a very ugly solution because fsCalls funciton object is doubled in the index.js
// Make a proper module or smth like this.


// Functions that deal with the file system on the server
var fsCalls = {

 // Delete duplicating elements in the array of objects (by the id attribute)
 // and sorts out the array <-- get out into another function
 clearDoubles: function (array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
   for(var j=i+1; j<a.length; ++j) {
    if(a[i].id == a[j].id)
     a.splice(j--, 1);
   }
  } 
  // console.log ("Duplicates removed from the even list")
  a = fsCalls.sort (a);
  return a;
 },

 // Sorts array objects (by the start_time attribute)
 sort: function (array) {
  var a = array.concat();
  a.sort(function(a, b) {
   var c = new Date(a.start_time);
   var d = new Date(b.start_time);
   return c-d;
  });
  // console.log ("Event list sorted out");
  return a;
 },

 // Reading file
 read: function (fileName, callback) {
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) return console.log(err);
    var storageVariable = JSON.parse(data);
    // console.log ("I've just read " + storageVariable.length + " pages from " + fileName );
    if (typeof callback === "function")
     {
      callback(storageVariable);      
     }
    else console.log ("Oppse! Callback type is " + (typeof callback));
  });
 },

 // Writing into the file
 write: function (fileName, data) {
  //Convers JSON event object into the string  that can be writter into the file
  var dataString = JSON.stringify(data)
  // Write into the file on the server
  fs.writeFile(eventsFilePath, dataString , function (err) {
    if (err) return console.log(err);
    // console.log("I've just written " + data.length + " pages into " + fileName );
  }); 
 }
};




// fbAPI: This variable contains functions dealing with FB Graph API
//		  and stores events that have been pulled from FB; 

var fbAPI = {
 // A variable to store the events pulled out from FB.api call
 eventsUpdate: [],
 // A function that authenticates the app on FB
 // and allows for the further calls
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
       } // console.log('Wait a bit, until I check ' + venues.length + " venues");
      //var accessToken = res.access_token;
  });
 },

 ready: function () {
 //Pushing some stats into the logg
 // console.log("Fine, but " + errorCounter + " venues have basically respondeded with: 'Fuck off, gringo! We don't use event page!");
 errorCounter = 0;

 //At this moment the array with events is pure mess
 //this function will fix it up for us
 fbAPI.eventsUpdate = fbAPI.clearDoubles(fbAPI.eventsUpdate);
 fsCalls.write (eventsFilePath, fbAPI.eventsUpdate);
 },

 // A function that makes a FB.api call
 request: function (venueName) { 
  FB.api(

   // The path requested from the FB.api (Graph API)
   venueName + '/events?limit=10000',

   // Callback function triggered when the result is returned
   function (res) {
    // CALLBACK: CHECK 1
    // There are many things that can go wrong with FB.api calls
    // this will fire if the results are error or not returned
    if( !res || res.error )
     {
       //  uncomment follwoing if fb error note is needed
       // console.log(!res ? 'error occurred' : res.error); 
       errorCounter++;
       fbAPI.requestMonitor ();
       return;
     }

    // CALLBACK: CHECK 2
    // Result might come positive, but empty. If request was correct,
    // but the venue page owners do not use the venue events.
    if ( res.data.length == 0 )
     {
      emptyVenues++;
      fbAPI.requestMonitor ();
      return;
     }

    // CALLBACK: USE DATA
    // If request is positive the response (res) will be chopped in pieces by
    // this loop and each answer (aka individual event) will be added to the array.
    for ( var i=0; i<res.data.length; i++ ) fbAPI.addEvent (res.data[i]);
    
    fbAPI.requestMonitor ();
  });
 },

 requestMonitor: function () {
  venueLength--;
  //console.log ( "Left to call " + venueLength );
  //if ( venueLength == venues.length - 1 ) console.log ( "Starting..." );
  if ( venueLength == 0 ) fbAPI.ready(); 
 },

 // This function deals with the response date,
 // adding each individual event into the final array.
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
      if (data.place.location.street === undefined ||
          data.place.location.street === null      ||
          data.place.location.street ===  "")
      {
        placeLocationStreet    = "Somewhere in Helsinki";  
      }  
    }    
  };

  // add formated time mark for the HTML output
  time = new Date(data.start_time);
  month = months[time.getMonth()];
  minutes = time.getMinutes();
  if ( minutes == 0 ) minutes = "00";
  time = month+ " " + time.getDate() + ", " + time.getHours() + ":" + minutes;

  // push final event object to the general array
  fbAPI.eventsUpdate.push(
    {
     id:            data.id,
     name:          data.name.toLowerCase(),
     start_time:    data.start_time,
     time:          time,
     venue_name:    placeName,
     venue_address: placeLocationStreet,
     latitude:      placeLocationLatitude,
     longitude:     placeLocationLongitude,
     distance:      null, 
     // price: "0-100$"
     // Pulling price from FB pages happened to be a challenge
    }
  );
 },


// WARNING!
// This is a very ugly solution because clearDoubles and sort funcitons are doubled in the index.js
// Make a proper module or smth like this.


 // Delete duplicating elements in the array of objects (by the id attribute)
 // and sorts out the array <-- get out into another function
 clearDoubles: function (array) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
   for(var j=i+1; j<a.length; ++j) {
    if(a[i].id == a[j].id)
     a.splice(j--, 1);
   }
  };
   //console.log ("Duplicates removed from the even list")
  a = fbAPI.sort (a);
  return a;
 },

 // Sorts array objects (by the start_time attribute)
 sort: function (array) {
  var a = array.concat();
  a.sort(function(a, b) {
   var c = new Date(a.start_time);
   var d = new Date(b.start_time);
   return c-d;
  });
  // console.log ("Event list sorted out");
  return a;
 }

};
// fbAPI: end




setInterval(function() { 
  // This function call will first read the existing files from the server
  // and then trigger the file updates with FB events.
  fsCalls.read (eventsFilePath,
   function (data) { 
    fbAPI.eventsUpdate = data;     // store old events in fbAPI.eventsUpdate
    fsCalls.read(venuesFilePath,
    function (data) { 
     venues = data;                // store venues in the venues
     venueLength = venues.length;
     fbAPI.init();                 // callback fbAPI.init() 
    })});
}, 360000);