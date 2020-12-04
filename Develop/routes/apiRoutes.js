const fs = require('fs');
const noteData = require('../db/db.json');


module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        fs.readFileSync('./db/db.json', 'utf8');
        return res.json(noteData);
    });

    app.post('/api/notes', function(req, res) {
        let newNote = req.body;
        let noteID = (noteData.length).toString();
        newNote.id = noteID;
        noteData.push(newNote);
        return res.json(newNote)
    });

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