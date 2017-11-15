var express = require("express");
var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://localhost/test', {
    useMongoClient: true,
});

var mongoModelData = require("./models/appdata")


var app = express();

var port = process.env.port || 9000;
var appRouter = express.Router();

appRouter.route("/data")
    .get(function(req, res) {
        var promise = mongoModelData.find()
        
        promise.then(function(err, data) {
            if (err) 
                res.status(500, err);
             else 
                res.json(data);
            
        });
        promise.exec();
    });

app.use("/api", appRouter);

app.get("/", function(req, res) {
    res.send("Welcome to node API!")
})

app.listen(port, function() {
    console.log("Gulp is Running on port" + port)
})