var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function () {
    return gulp.src('./js/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./js/'));
});