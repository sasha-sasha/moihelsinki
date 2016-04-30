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

var errorCounter     = 0 //monitor for the venues that do not accept the call
var emptyVenues      = 0 //monitor variable for venues with no events returned on request





//Functions that deal with the file system on the server
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



//Prepare the output for the webpage
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
  // console.log ("Duplicates removed from the even list")
  a = fsCalls.sort (a);
  return a;
 },

 sort: function () {
  output.events = output.clearDoubles (output.events);
  output.events.sort(function(a, b) {
   var c = new Date(a.start_time);
   var d = new Date(b.start_time);
   return c-d;
  });
  // console.log ("Output event list sorted out");
  // console.log (" ");
  // console.log (" ");
 },
};

//calling for the output variable generation
setInterval(function() { output.cashData(); }, 6000);


// GET home page
// Learn more https://youtu.be/FqMIyTH9wSg
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Moi Helsinki — event calendar', allEvents: output.events });
  /*
  fsCalls.read (eventsFilePath,
   function (data) { 
    res.render('index', { title: 'Moi Helsinki', allEvents: data });
   });
  */
});

module.exports = router;


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3001, function(){
  // console.log('listening on *:300');
});

