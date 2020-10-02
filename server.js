// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const { fstat } = require("fs");
var Db = ("db/db.json");
var fs = require("fs");
const bodyParser = require('body-parser');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4000;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/public'));

//data

const notes = [{
    id: '',
    body: ''

}];


// Routes
// =============================================================

//Routes

app.use(express.static("public"));

//notes section
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));

});

app.get("/*", function(req, res) {

    res.sendFile(path.join(__dirname, "public/index.html"));
});


app.post("/api/notes", function(req, res) {
    console.log(req.body);
    fs.readFile("./notes", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        const notes = JSON.parse(data);
        notes.forEach(req.body);
        console.log(notes);
    });
});

//index section 


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});