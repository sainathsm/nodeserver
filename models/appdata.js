var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var appModel = new Schema({
    name : {
        type : string
    },
    validData  : {
        type : boolean,
        default: false
    }
})

module.exports = mongoose.model("App", appModel);