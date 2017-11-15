var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var appModel = new Schema({
    name : {
        type : String
    },
    validData  : {
        type : Boolean,
        default: false
    }
})

module.exports = mongoose.model("mongoModelData", appModel);