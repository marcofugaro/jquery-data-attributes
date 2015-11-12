var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");


gulp.task('build', function() { 
    return gulp.src('dataAttributes.jquery.js')  
        .pipe(uglify({ preserveComments: 'license' }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['build']);