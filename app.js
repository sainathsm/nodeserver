var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser")

var db = mongoose.connect('mongodb://localhost/appdata', {
    useMongoClient: true,
});

var mongoModelData = require("./models/appdata")


var app = express();

var port = process.env.port || 9000;
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var appRouter = require("./routes/appdata.routes")(mongoModelData);

app.use("/api", appRouter);

app.get("/", function(req, res) {
    res.send("Welcome to node API!")
})

app.listen(port, function() {
    console.log("Gulp is Running on port" + port)
})