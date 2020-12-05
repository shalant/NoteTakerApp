 //frank's to do list
 // - back end routes ( ie /api/notes or //api anything)
    // create, read, update or delete data in db. 
      // - do the task and then send back the data

//from askBCS: 
//1. Via the express route, you need to send the server the id of the note to be deleted 
//   (using req params would be easiest)
//2. Within the routes, you'll need to read the "db". In this assignment,
//   a json file is used as a stand-in for a database. You're already reading a using the db in your GET route
//3. Next is the tricky part, you have the whole database and the record to be deleted. What methods do you have
//   at your disposal to filter out new data from old given a condition?
//4. Once you have a new array with all but the record that was "deleted" the rewrite that new array as db.json
//5. Send a response back to the front end like a 200 code or success message
//   so the client know the delete was a success


const fs = require('fs');
const noteData = require('../db/db.json');

// Routes:
//I need to set up 5: GET:'/notes', GET'*', GET'/api/notes', POST'/api/notes', DELETE'/api/notes/:id'

//#1: GET 'notes'
module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        fs.readFileSync('./db/db.json', 'utf8');
        //ask BCS assistant had me condense these two lines into the following line
    //const parsedData = JSON.parse(data)
    //res.send(parsedData)
        return res.json(noteData);
    });

//Q for askBCS: in #4, how to i add newNote to db.json?
//Q for askBCS: how do i give a note an id?

//#3 GET '/api/notes'



    //#4 POST '/api/notes'
//POST `/api/notes` - Should receive a new note to save on the request body,
//add it to the `db.json` file, and then return the new note to the client.
    app.post('/api/notes', function(req, res) {
        let newNote = req.body;
         // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  //this is kind of adapted from star wars
        let noteID = (noteData.length).toString();
        newNote.id = noteID;
        noteData.push(newNote);
        return res.json(newNote)
    });

// // Basic HTTP route for POST:'/api/notes' to receive new note to save on request body,
  // // add to db.json, and return the new note to the client


  //#5 DELETE '/api/notes/:id'
    app.delete('/api/notes/:id', function(req, res) {
        let id = req.params.id.toString();
        for (i=0; i < noteData.length; i++) {
            if (noteData[i].id === id) {
                res.send(noteData[i]);
                noteData.splice(i, 1);
            }
        }
    });
};