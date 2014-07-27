var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

// Modules for webserver and livereload
var embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 8080;

// Set up an express server (not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'public' folder as rootfolder
server.use(express.static('./public'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
  res.sendfile('index.html', { root: 'public' });
});

// Dev task
gulp.task('default', ['views', 'styles', 'lint', 'js'], function() {
  // Start webserver
  server.listen(serverport);
  // Start live reload
  lrserver.listen(livereloadport);
  // Run the watch task, to keep taps on changes
  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
    'lint', 'js'
  ]);
  // Watch our sass files
  gulp.watch(['app/styles/**/*.scss'], [
    'styles'
  ]);

  gulp.watch(['app/**/*.html'], [
        'views'
    ]);
});

// JSHint task
gulp.task('lint', function() {
  gulp.src('app/scripts/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Styles task
gulp.task('styles', function() {
  gulp.src('app/styles/*.scss')
  // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
  .pipe(sass({onError: function(e) { console.log(e); } }))
  // Optionally add autoprefixer
  .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
  // These last two should look familiar now :)
  .pipe(gulp.dest('public/css/'))
  .pipe(refresh(lrserver));
});

// Views task
gulp.task('views', function() {
    // Get our index.html
    gulp.src('app/index.html')
    // And put it in the public folder
    .pipe(gulp.dest('public/'))
    .pipe(refresh(lrserver));

    // Any other view files from app/views
    gulp.src('app/views/**/*')
    // Will be put in the public/views folder
    .pipe(gulp.dest('public/views/'))
    .pipe(refresh(lrserver));
});

//JS Task
gulp.task('js', function() {
  gulp.src('app/scripts/**/*.js')
  //Copy to public folder
  .pipe(gulp.dest('public/scripts'))
  .pipe(refresh(lrserver));
});
