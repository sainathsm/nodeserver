var express = require("express");
var routes = function(mongoModelData){
    
var appRouter = express.Router();
appRouter.route("/data")
    .post(function(req, res) {
        var data = new mongoModelData(req.body);
        data.save()
        res.status(201).send(data); 
    })
    .get(function(req, res) {
        var query = req.query;
        /*
        var query = {};

        if(req.query.name){
            query.name = req.query.name;
        }*/
        mongoModelData.find(query, function(err, data) {
            if (err) {
                res.status(500).send(err);
            }
             else {
                res.json(data);
             }
        });
    });
appRouter.use("/data/:id",function(req,res,next){
    mongoModelData.findById(req.params.id, function(err, data) {
            if (err) {
                res.status(500).send(err);
            }
            else if(data) {
                req.data = data;
                next();
             } else {
                 res.status(404).send("data not found ")
             }
    })
}); 
appRouter.route("/data/:id")
    .get(function(req, res) {
            res.json();
    })
    .put(function(req, res) {
            req.data.name = req.body.name;
            req.data.validData = req.body.validData;
            req.data.save(); 
            res.json(req.data);
    }).delete(function(req, res) {
            req.data.remove(function(err){
                if(err){
                    res.status(500).send(err)
                } else {
                    res.status(200).send({ success : true})
                }
            })
    });;

    return appRouter;
}

module.exports = routes;