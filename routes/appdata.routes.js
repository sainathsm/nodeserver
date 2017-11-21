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
            res.json(req.data);
    })
    .put(function(req, res) {
            req.data.productID = req.body.productID;
            req.data.colour = req.body.colour;
            req.data.rearcamera = req.body.rearcamera;
			
			
            req.data.frontcamera = req.body.frontcamera;
            req.data.processor = req.body.processor;
            req.data.RAM = req.body.RAM
			
			
            req.data.ROM = req.body.ROM;
            req.data.SIM = req.body.SIM;
            req.data.display = req.body.display;
			
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