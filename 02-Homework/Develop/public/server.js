
var express = require('express');
var path = require('path');
//not sure about line 6
var router = express.Router();

// Sets up the Express App
var app = express();
var PORT = 3333;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes:
//I need to set up 5: GET:'/notes', GET'*', GET'/api/notes', POST'/api/notes', DELETE'/api/notes/:id'

// Basic HTTP route for GET:'notes' to notes.html
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });
  
  // Basic HTTP route for GET:'*' to index.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  // Basic HTTP route for GET:'/api/notes' to read db.json and return all saves notes as JSON (incomplete)

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  // Basic HTTP route for POST:'/api/notes' to receive new note to save on request body,
  // add to db.json, and return the new note to the client
  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  // Basic HTTP route for DELETE:'/api/notes/:id' to receive query parameter containing ID of a note to delete,
  // (find a way to give each note a unique "id" when it is saved)
  // to delete the note, read all notes in the db.json files, remove the note with the given ID property,
  //      then rewrite the notes to the db.json file

//app.get(NO FUCKING IDEA!!!)



module.exports = router;