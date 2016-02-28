var allVenues = [
  {venuePage:"goethe.suomi",
   venueName:"Goethe-Institut",
   venueAddress:"Salomonkatu 5 B"
  },

  {venuePage:"siltanenbar",
   venueName:"Siltanen",
   venueAddress:"Hämeentie 13 B"
  },

  {venuePage:"cafemascot",
   venueName: "Cafe Mascot",
   venueAddress: "Neljäs linja 2"
  },

  {venuePage:"clubkaiku",
   venueName: "Kaiku",
   venueAddress: "Kaikukatu 4"
  },

  {venuePage:"mbarhelsinki",
   venueName: "mbar",
   venueAddress: "Mannerheimintie 22-24"
  },

  {venuePage:"mbarhelsinki",
   venueName: "mbar",
   venueAddress: "Mannerheimintie 22-24"
  },

  {venuePage:"laiturihelsinki",
   venueName: "Luituri",
   venueAddress: "Narinkka 2"
  },

  {venuePage:"teatteriwhs",
   venueName: "WHS Teatteri Union",
   venueAddress: "Siltavuorenranta"
  },

  {venuePage:"VuotaloTiedotus",
   venueName: "Vuotalo",
   venueAddress: "Mosaiikkitori 2"
  },

  {venuePage:"113677588801661",
   venueName: "Oranssi Ry",
   venueAddress: "Kaasutehtaankatu 1, building 11"
  },

  {venuePage:"114962855198875",
   venueName: "Arkadia International Bookshop",
   venueAddress: "Nervanderinkatu 11"
  },

  {venuePage:"Elokuvateatteri.Orion",
   venueName: "Orion Cinema",
   venueAddress: "Eerikinkatu 15"
  },

  {venuePage:"Korjaamo",
   venueName: "Korjaamo",
   venueAddress: "Töölönkatu 51"
  },

  {venuePage:"taidehalli",
   venueName: "Taidehalli Art Gallery",
   venueAddress: "Nervanderinkatu 3"
  },

  {venuePage:"Sibatapahtumat",
   venueName: "Sibelius Academy",
   venueAddress: "Helsinki"
  },

  {venuePage:"BrewDogHel",
   venueName: "BrewDog Helsinki Bar",
   venueAddress: "Tarkkampujankatu 20"
  },

  {venuePage:"barloose",
   venueName: "Bar Loose",
   venueAddress: "Annankatu 21"
  },

  {venuePage:"tavastia",
   venueName: "Tavastia Club",
   venueAddress: "Urho Kekkosen katu 4-6"
  },

  {venuePage:"Aaniwalli",
   venueName: "Ääniwalli Club",
   venueAddress: "Pälkäneentie 13"
  },

  {venuePage:"KiasmaMuseum",
   venueName: "Kiasma Museum",
   venueAddress: "Mannerheiminaukio 2"
  }




var allEvents = [];

//var dateToday = new Date(2015,10,18);
var dateToday = new Date();
var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var allVenues = [
  {venuePage:"goethe.suomi",
   venueName:"Goethe-Institut",
   venueAddress:"Salomonkatu 5 B"
  },

  {venuePage:"siltanenbar",
   venueName:"Siltanen",
   venueAddress:"Hämeentie 13 B"
  },

  {venuePage:"cafemascot",
   venueName: "Cafe Mascot",
   venueAddress: "Neljäs linja 2"
  },

  {venuePage:"clubkaiku",
   venueName: "Kaiku",
   venueAddress: "Kaikukatu 4"
  },

  {venuePage:"mbarhelsinki",
   venueName: "mbar",
   venueAddress: "Mannerheimintie 22-24"
  },

  {venuePage:"mbarhelsinki",
   venueName: "mbar",
   venueAddress: "Mannerheimintie 22-24"
  },

  {venuePage:"laiturihelsinki",
   venueName: "Luituri",
   venueAddress: "Narinkka 2"
  },

  {venuePage:"teatteriwhs",
   venueName: "WHS Teatteri Union",
   venueAddress: "Siltavuorenranta"
  },

  {venuePage:"VuotaloTiedotus",
   venueName: "Vuotalo",
   venueAddress: "Mosaiikkitori 2"
  },

  {venuePage:"113677588801661",
   venueName: "Oranssi Ry",
   venueAddress: "Kaasutehtaankatu 1, building 11"
  },

  {venuePage:"114962855198875",
   venueName: "Arkadia International Bookshop",
   venueAddress: "Nervanderinkatu 11"
  },

  {venuePage:"Elokuvateatteri.Orion",
   venueName: "Orion Cinema",
   venueAddress: "Eerikinkatu 15"
  },

  {venuePage:"Korjaamo",
   venueName: "Korjaamo",
   venueAddress: "Töölönkatu 51"
  },

  {venuePage:"taidehalli",
   venueName: "Taidehalli Art Gallery",
   venueAddress: "Nervanderinkatu 3"
  },

  {venuePage:"Sibatapahtumat",
   venueName: "Sibelius Academy",
   venueAddress: "Helsinki"
  },

  {venuePage:"BrewDogHel",
   venueName: "BrewDog Helsinki Bar",
   venueAddress: "Tarkkampujankatu 20"
  },

  {venuePage:"barloose",
   venueName: "Bar Loose",
   venueAddress: "Annankatu 21"
  },

  {venuePage:"tavastia",
   venueName: "Tavastia Club",
   venueAddress: "Urho Kekkosen katu 4-6"
  },

  {venuePage:"Aaniwalli",
   venueName: "Ääniwalli Club",
   venueAddress: "Pälkäneentie 13"
  },

  {venuePage:"KiasmaMuseum",
   venueName: "Kiasma Museum",
   venueAddress: "Mannerheiminaukio 2"
  }



];
var venueCheckdone = 0;

function sortingTimes (array) {
  array.sort(function(a,b){
  var c = new Date(a.start_time);
  var d = new Date(b.start_time);
  return c-d;
  });
}

function addEventsToPage () {
  var dead = 0;
  sortingTimes(allEvents);
  for (var i=0; i<allEvents.length; i++){
    var eventStartTime = new Date(allEvents[i].start_time);

//TEST WHY SAFARI FAILS
      if (dateToday <= eventStartTime)
      console.log ("dateToday <= eventStartTime");
      if (dateToday == eventStartTime)
      console.log ("dateToday == eventStartTime");
      if (dateToday >= eventStartTime)
      console.log ("dateToday >= eventStartTime");

      if (dateToday <= eventStartTime) {
//    if (1){
//    if (dateToday.getDate() == eventStartTime.getDate() && dateToday.getMonth() == eventStartTime.getMonth()){
    var eventDiv = $ ("<div></div>");
    var month = months[eventStartTime.getMonth()];
    var eventDetails = $("<p></p>")
              .addClass("event-details")
              .html (allEvents[i].venue_address + " | " + month+ " " + eventStartTime.getDate() + ", " + allEvents[i].start_time.substring(11,16) + " | " + allEvents[i].price);

    var eventName = $("<h2></h2>")
              .addClass("sub-header")
              .html ("<a href='http://facebook.com/"+allEvents[i].id+"' target='_blank'>" + allEvents[i].name + "</a>");      

    var eventVenueName = $("<p></p>")
              .addClass("event-venue-name")
              .html (allEvents[i].venue_name);    
    eventDiv.append(eventDetails);
    eventDiv.append(eventName);
    eventDiv.append(eventVenueName);
    eventDiv.append("<hr>");
    $("#events").append(eventDiv);
    }
    else dead++;

    if (dead == allEvents.length)
          $("#events").append("<p class='event-details'>"+ dateToday.getDate()+ " " +  months[dateToday.getMonth()] + "</p><h2 class='sub-header'>Helsinki is going to be dead</h2><p class='event-venue-name'>Try Berlin</p>");

  }
}




// FB APP ID

window.fbAsyncInit = function() {
FB.init({
  appId      : '1633349693592514',
  cookie     : true,  // enable cookies to allow the server to access the session
  xfbml      : true,  // parse social plugins on this page
  version    : 'v2.5' // use version 2.2
});


(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// FB LOGIN 


// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
 // console.log('statusChangeCallback');
 // console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI();
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}


// Now that we've initialized the JavaScript SDK, we call 
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.

FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});

};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1633349693592514";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  //console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    //console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'moi, ' + response.name;
  });

function checkIfReady (){
  if (venueCheckdone == allVenues.length) addEventsToPage();
}

function callFBAPI (venuePage, venueName, venueAddress) {
  // make the API call 
  FB.api(
      "/"+ venuePage + "/events?limit=100",
      function (response) {
        if (response && !response.error) {
          // Populate results into the allEvents array 
          for (var i=0; i<response.data.length; i++){
          allEvents.push({
            id: response.data[i].id,
            name: response.data[i].name,
            start_time: response.data[i].start_time,
            venue_name: venueName,
            venue_address: venueAddress,
            price: "0-100$"
          });
          }
          venueCheckdone++;
          checkIfReady();
        }
      }
  ); 
}

for (var i=0; i<allVenues.length; i++) {
callFBAPI (allVenues[i].venuePage, allVenues[i].venueName, allVenues[i].venueAddress);
}

}

