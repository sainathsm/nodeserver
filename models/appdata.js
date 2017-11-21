var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var appModel = new Schema({
    productID : {
        type : String,
		default: "NoKey"
    },
    colour : {
        type : String,
		default : "Black"
    },
	rearcamera : {
        type : Number,
		default: 5
    },
	frontcamera : {
        type : Number,
		default: 12
    },
	processor : {
        type : String,
		default: "snapdragon66"
    },
	RAM : {
        type : Number,
		default: 2
    },
	ROM : {
        type : Number,
		default: 2
    },
	SIM : {
        type : Number,
		default: 1
    },
	display : {
        type : Number,
		default: 4.8
    }	
})

module.exports = mongoose.model("mongoModelData", appModel);