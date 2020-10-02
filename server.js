// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const { fstat } = require("fs");
var Db = require("./db/db.json");
let fs = require("fs");
const bodyParser = require('body-parser');
const { get } = require("http");
const { writeFileSync } = require("fs");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.set("view engine", "./db/db.json");

//data
let note = [{ "title": "Test Title", "text": "Test text" }];

// Routes
// =============================================================

//Routes

app.use(express.static("public"));
app.use(express.static(".db/db.json"));


//notes section
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));

});

app.get("/api/notes", function(req, res) {
    fs.writeFile("./db/db.json", ("utf-8"), (err, data) => {
        if (err) {
            console.log(err);
            return res.json({
                error: true,
                data: null,
                message: "no notes"
            });
        }
        res.json(JSON.parse("updatedData"));
        res.render("updatedData");
        updatedData.push(req.body);
    });
    res.sendFile(path.join(__dirname, "public/api/notes.html"));
    res.render(".db/db.json", {
        note: note
    });
});

app.get("/*", function(req, res) {

    res.sendFile(path.join(__dirname, "public/index.html"));
});


app.post("/api/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        const updatedData = (data);
        console.log(data);
        fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
            if (err) throw err;
            res.json({
                error: true,
                data: null,
                message: "add new note"
            });
            updatedData.push(req.body);
            console.log(updatedData);
        });

        res.sendFile(path.join(__dirname, "public/notes.html"));
    });
});

//index section 


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});