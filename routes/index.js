var express  = require('express')
var router   = express.Router()

var http = require('http').Server(router); // Plugging in Socket.io 
var io = require('socket.io')(http);       // http://socket.io/get-started/chat/

var FB       = require('fb')               // Facebook
var fs       = require('fs')               // File System
var path     = require('path')
var Hogan    = require('hogan.js')         // Templating module

var LatLon   = require('mt-latlon');       // Latitude/longitude spherical geodesy formulae and scripts.

var appRoot        = path.resolve(__dirname, '..')
var eventsFilePath = path.join(appRoot, 'events.txt')

var events = []

// We need these variables in order to manually pre-render the HTML for an output
// Explained here: https://youtu.be/FrB8mxdWR7o?list=PLoYCgNOIyGAACzU6GliHJDp4kmOw3NFsh
var template         = fs.readFileSync('./views/events.hjs', 'utf-8')
var compiledTemplate = Hogan.compile(template)

// Make http server listen to the port 8080
http.listen(8080, function(){
console.log('listening on *:8080');
});



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



// Prepare the output for the webpage
var output = {
 events: [],
 cashData: function () {
  output.events = fsCalls.clearDoubles(output.events);
  fsCalls.read (eventsFilePath,
   function (data) { 
    output.filter(data);
   });  
 },

 filter: function (data) {
  var check;
  var now = new Date();
  var time = now.getTime();
  // console.log ("Output filter called on " + now);
  for (var i=0; i<data.length; i++)
   {
    // Comparing date of the event with current time
    check = time - (new Date(data[i].start_time)).getTime();
    if (check < 0)
     {
      output.events.push(data[i]);
     }
   } output.sort ();
 },

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

 findDistance: function (position) {
  var currentLocation = new LatLon(position.latitude, position.longitude);
  for (var i=0; i<output.events.length; i++){
    var eventLocation         = new LatLon(output.events[i].latitude, output.events[i].longitude);
    output.events[i].distance = currentLocation.distanceTo(eventLocation);
    //console.log (output.events[i].distance);
  }
 },

 sortDistance: function () {
  output.events.sort(function(a, b) {
   var c = a.distance;
   var d = b.distance;
   return c-d;
  });
 },

 sort: function () {
  output.events = output.clearDoubles (output.events);
  output.events.sort(function(a, b) {
   var c = new Date(a.start_time);
   var d = new Date(b.start_time);
   return c-d;
  });
  // console.log ("Output event list sorted out");
 },
};

// Calling for the output variable generation
output.cashData();
setInterval(function() { output.cashData(); }, 6000);


// GET home page
// Learn more https://youtu.be/FqMIyTH9wSg
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Moi Helsinki — event calendar', events: output.events });
});

module.exports = router;

io.on('connection', function(socket){

  socket.on('position', function(position){
  // console.log ("User location recieved");
  output.findDistance(position);
  });

  socket.on('sort-distance', function(position){
    // console.log ("Sort by user location");
    output.sortDistance();
    var render = compiledTemplate.render( {events: output.events} );
    socket.emit('sort-distance', render );
  });

  socket.on('sort-time', function(position){
    // console.log ("Sort by time");
    output.sort();
    var render = compiledTemplate.render( {events: output.events} );
    socket.emit('sort-time', render );
  });

});



