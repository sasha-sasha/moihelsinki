
window.fbAsyncInit = function() {
 FB.init({
//   appId      : '1633349693592514',
   appId      : '1658672054400703', // localhost
   cookie     : true,  // enable cookies to allow the server to access the session
   xfbml      : true,  // parse social plugins on this page
   version    : 'v2.5' 
  });

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  //console.log('statusChangeCallback');
  //console.log(response);
  if (response.status === 'connected') {
    // User is logged into the app via FB
    callAPI();
  } else if (response.status === 'not_authorized') {
   // document.getElementById('status').innerHTML = 'Log in';
  } else {
   // document.getElementById('status').innerHTML = 'Log in';
  }
}

function callAPI() {
  console.log('FB API is rolling ... ');

  checkEvents( { allVenues: allEvents.allVenues } );

  //this can be commented for a while, when the app access token is at place
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    //document.getElementById('status').innerHTML = response.name;
  });
}

function checkEvents (allVenues) {



//This huge chunk is finding events near the helsinki center and pushing test batch into the list.
//The actual value is getting the venueArchive object array from there.
/*
var k =0;
var venueArchive = [];
var getPosts = function (response){
          for (element in response.data){
            place = response.data[element];
            venueArchive.push (
             {
              venuePage: place.id,
              venueName: place.name,
              venueAddress: place.location.street
             }
              );        
          } callingEvents();


          // can i call FB.api(nextPage, getPosts); ??
          if(k < 10){
              nextPage = response.paging.next;        
              console.log(nextPage);
              k++;
              //Method 1: I use it.
              $.get(nextPage, getPosts, "json"); //optional: $.getJSON can be use instead
          }

      }

function callingEvents () {

 for (var i=0; i<venueArchive.length; i++) {
  var thisVenue = venueArchive[i];

//  batch.push({ method: 'POST', relative_url: thisVenue.venuePage + '/events?limit=100'});
  //this count is real ugly, but there is an issue with FB api callback. Find out how to callback from the multiple processes in the for loop

  var count = 0;
  FB.api(
   "/"+ thisVenue.venuePage + "/events?limit=100",
   function (response) {
    if (response.error) console.log (response);

    for (var j=0; j<response.data.length; j++) {
      allEvents.addEvent (response.data[j]);
      //console.log (response);
    }
    count++;
    if (count == venueArchive.length) allEvents.sortEvents();
   }
  );
 };

}

FB.api('search?center=60.1708,24.9375&distance=5000&limit=5000&q=*&type=place', getPosts);   
*/    


 for (var i=0; i<allVenues.allVenues.length; i++) {
  var thisVenue = allVenues.allVenues[i];

//  batch.push({ method: 'POST', relative_url: thisVenue.venuePage + '/events?limit=100'});
  //this count is real ugly, but there is an issue with FB api callback. Find out how to callback from the multiple processes in the for loop

  var count = 0;
  FB.api(
   "/"+ thisVenue.venuePage + "/events?limit=100",
   function (response) {
    if (response.error) 
      console.log (response)
    else
    {
      for (var j=0; j<response.data.length; j++) {
        allEvents.addEvent (response.data[j]);
        //console.log (response);
      }
    }
    count++;
    if (count == allVenues.allVenues.length) allEvents.sortEvents();
   }
  );
 };

}





(function(d, s, id) {
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) return;
 js = d.createElement(s); js.id = id;
// moihelsinki.com
// js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1633349693592514";
// localhost
 js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1658672054400703";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

