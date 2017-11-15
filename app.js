var express = require("express");
var mongoose = require("mongoose");

var db = mongoose.connect("mongodb:localhost/appAPI");

var mongoModelData = require(".models/appdata")


var app = express();

var port = process.env.port || 9000;

var appRouter = express.Router();
appRouter.route("/data")
    .get(function(req, res) {
        var resData = {
            "greeting" : "hello"
        }
        res.json(resData);
    });

app.use("/api", appRouter);

app.get("/", function(req, res){
    res.send("Welcome to node API!")
})

app.listen(port, function(){
    console.log("Gulp is Running on port" + port)
})