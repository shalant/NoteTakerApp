
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

app.get('/api/notes', function(req,res){
  
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data)
    res.send(parsedData)

  })
  
  
 

})
// Frank's to do list
//try to get the endpoints to respond with the corresponding information
  // -front end routes ( ie /users or /notes or /notes/:id)
    //send HTML

  // - back end routes ( ie /api/notes or //api anything)
    // create, read, update or delete data in db. 
      // - do the task and then send back the data


// Basic HTTP route for GET:'notes' to notes.html
 app.get("/notes", function(req, res) {
       res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
  
  // Basic HTTP route for GET:'*' to index.html
  // app.get("/index", function(req, res) {
  //   res.sendFile(path.join(__dirname, "index.html"));
  // });

  // // Basic HTTP route for GET:'/api/notes' to read db.json and return all saves notes as JSON (incomplete)

  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "notes.html"));
  // });

  // // Basic HTTP route for POST:'/api/notes' to receive new note to save on request body,
  // // add to db.json, and return the new note to the client
  
  // app.get("*", function(req, res) {
  //   res.sendFile(path.join(__dirname, "notes.html"));
  // });

  // Basic HTTP route for DELETE:'/api/notes/:id' to receive query parameter containing ID of a note to delete,
  // (find a way to give each note a unique "id" when it is saved)
  // to delete the note, read all notes in the db.json files, remove the note with the given ID property,
  //      then rewrite the notes to the db.json file

//app.get(NO FUCKING IDEA!!!)


app.listen(PORT, function(){
  console.log('Server is listening on Larry Bird Larry Bird')
})