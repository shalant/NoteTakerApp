// Frank's to do list
//try to get the endpoints to respond with the corresponding information
  // -front end routes ( ie /users or /notes or /notes/:id)
    //send HTML

  // - back end routes ( ie /api/notes or //api anything)
    // create, read, update or delete data in db. 
      // - do the task and then send back the data

var express = require('express');
var fs = require('fs');

var path = require('path');

// Sets up the Express App
var app = express();
var PORT = 3333;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes:
//I need to set up 5: GET:'/notes', GET'*', GET'/api/notes', POST'/api/notes', DELETE'/api/notes/:id'

//#1: GET 'notes'
// Basic HTTP route for GET:'notes' to notes.html
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});



//#2 is the last one- a "catch-all" SO SCROLL TO THE END


//#3 GET '/api/notes'
app.get('/api/notes', function(req,res){
    fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    //ask BCS assistant had me condense these two lines into the following line
    //const parsedData = JSON.parse(data)
    //res.send(parsedData)
    res.json(data);
  })
  
//#4 POST '/api/notes'
//POST `/api/notes` - Should receive a new note to save on the request body,
//add it to the `db.json` file, and then return the new note to the client.
app.post('api/notes', function(req,res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  //this is kind of adapted from star wars
  var newNote = req.body;
  res.json(newNote);
});

//Q for askBCS: in #4, how to i add newNote to db.json?
//Q for askBCS: how do i give a note an id?


//#5 DELETE '/api/notes/:id'

  // // Basic HTTP route for POST:'/api/notes' to receive new note to save on request body,
  // // add to db.json, and return the new note to the client

  app.delete('/api/notes/:id', function (req, res) {
    res.send(newNote)
  })

})


//#2: GET '*'
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});


app.listen(PORT, function(){
  console.log('App listening on PORT " + PORT')
})