var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify')
    minifyHtml = require('gulp-minify-html'),
    sourceMaps = require('gulp-sourcemaps'),
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

var paths = {
    js : [
      'app/vendor/angular/angular.js',
      'app/vendor/angular-ui-router/release/angular-ui-router.js',
      'app/scripts/**/*.js', 
      'app/scripts/main.js'
    ]
}

// Dev task
gulp.task('default', ['views', 'styles', 'js'], function() {
  // Start webserver
  server.listen(serverport);
  // Start live reload
  lrserver.listen(livereloadport);
  // Run the watch task, to keep taps on changes
  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
    'js'
  ]);
  // Watch our sass files
  gulp.watch(['app/styles/**/*.less'], [
    'styles'
  ]);

  gulp.watch(['app/**/*.html'], [
        'views'
    ]);
});

//Build task
gulp.task('build', ['styles-dist', 'js-dist', 'views-dist']);

// Styles task
gulp.task('styles', function() {
  gulp.src('app/styles/*.less')
  .pipe(sourceMaps.init())
  .pipe(less())
  .pipe(sourceMaps.write())
  .pipe(gulp.dest('public/'))
  .pipe(refresh(lrserver));
});

gulp.task('styles-dist', function() {
  gulp.src('app/styles/*.less')
  .pipe(less())
  .pipe(minifyCss())
  .pipe(gulp.dest('public/'))
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

//Minify Html
gulp.task('views-dist', function() {
  gulp.src('app/index.html')
  .pipe(minifyHtml({empty: true, quotes: true}))
  .pipe(gulp.dest('public/'));

  gulp.src('app/views/**/*.html')
  .pipe(minifyHtml({empty: true, quotes: true}))
  .pipe(gulp.dest('public/views/'));
});

//JS Task
gulp.task('js', function() {
  gulp.src(paths.js)
  .pipe(sourceMaps.init())
  .pipe(concat('app.js'))
  .pipe(ngAnnotate())
  .pipe(sourceMaps.write())
  .pipe(gulp.dest('public/'))
  .pipe(refresh(lrserver));
});

gulp.task('js-dist', function() {
  gulp.src(paths.js)
  .pipe(concat('app.js'))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(gulp.dest('public/'))
});
