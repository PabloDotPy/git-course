const gulp = require("gulp");
const babel = require("gulp-babel");

// gulp dependencies will be here
gulp.task('default', function () {
    //code for Node
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    //code for browser
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
    
});