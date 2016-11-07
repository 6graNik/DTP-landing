var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-clean-css');


gulp.task('default', function() {
  return gulp.src('src/css/styles.css')
    .pipe(autoprefixer('last 2 version'))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'))
});
