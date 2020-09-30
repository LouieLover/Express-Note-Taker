// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 24000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//data

var notes = [{

}];

// Routes
// =============================================================

//Routes

app.use(express.static("public"));

app.get("/notes", function(req, res) {

    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/*", function(req, res) {

    res.sendFile(path.join(__dirname, "public/index.html"));
});


app.get("/api/notes", function(req, res) {

    res.json(notes);
});

//post 
app.post("api/notes", function(req, res) {

});

//Notes
app.get("/api/notes/:notes", function(req, res) {
    var chosen = req.params.notes;

    console.log(notes);

    for (var i = 0; i < notes.length; i++) {
        if (chosen === notes[i].routeName) {
            return res.json(notes[i]);
        }
    }

    return res.json(false);
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// Functions 

const creatNote = newNotes => {

};

const saveNote = saveNotes => {

};


const deleteNote = deleteNotes => {

};

//server maps