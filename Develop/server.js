var express = require('express');
var fs = require('fs');
var path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3333;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));


app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});



  })
//from irwin:in post request, how do i get the data?
// adds key/value pairs to label note, uuidv1 labels the id
//   var newNote = {
//     title: req.body.title,
//     text: req.body.text,
//     id: uuidv1()
//   }
//   console.log(newNote)
//   res.json(newNote);
// });

  
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
  console.log('App listening on PORT' + PORT)
});
