// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 24000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

//Routes
app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/*", function(req, res) {

    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/notes", function(req, res) {

    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/notes", function(req, res) {

    res.sendFile(path.join(__dirname, "view.html"));
});

//post 
app.post("api/notes", function(req, res) {

});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});