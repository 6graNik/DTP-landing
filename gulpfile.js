var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-clean-css');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['images', 'styles'], function() {
  var stream = nodemon({
    script: 'index.js',
    ext: '.js .css .html'
  });

  stream.on('restart', () => {
    console.log('Tasks restarted due to changes');
  });

  console.log(`Tasks complete`);
});

gulp.task('images', function(){
  return gulp.src('src/images/*')
    .pipe(gulp.dest('public/images'))
});

gulp.task('styles', function() {
  return gulp.src('src/css/styles.css')
    .pipe(autoprefixer('last 2 version'))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'))
});


function sum(a, b) {

}
