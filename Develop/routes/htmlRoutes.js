// Frank's to do list
//try to get the endpoints to respond with the corresponding information
  // -front end routes ( ie /users or /notes or /notes/:id)
    //send HTML

var path = require('path');

// Routes:
//I need to set up 5: GET:'/notes', GET'*', GET'/api/notes', POST'/api/notes', DELETE'/api/notes/:id'


module.exports = function(app) {

   //return the notes.html file 
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('styles', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/assets/css/styles.css'));
    });

    //catch all to bring random addresses to index.html
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

};
