var gulp =  require("gulp");
var nodemon = require("gulp-nodemon");

gulp.task("default", function(){
    nodemon({
        script : "app.js",
        ext :"js",
        env : {
            PORT : 8080
        },
        ignore : ["./node_module/**"]
    })
    .on("restart", function(){
        console.log("restart")
    })
});