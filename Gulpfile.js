(function () {
    'use strict';
    var gulp = require('gulp'),
        gutil = require('gulp-util'),
        less = require('gulp-less'),
        minifyCss = require('gulp-minify-css'),
        concat = require('gulp-concat'),
        ngAnnotate = require('gulp-ng-annotate'),
        uglify = require('gulp-uglify'),
        minifyHtml = require('gulp-minify-html'),
        flatten = require('gulp-flatten'),
        sourceMaps = require('gulp-sourcemaps'),
        plumber = require('gulp-plumber'),
        nodemon = require('gulp-nodemon'),
        childProcess = require('child_process'),
        karma = require('gulp-karma'),

    // Modules for webserver and livereload
        refresh = require('gulp-livereload'),
        lrserver = require('tiny-lr')(),
        express = require('express'),
        livereload = require('connect-livereload'),
        livereloadport = 35729,
        serverport = 8080,
        paths,
        server;

    // Set up an express server (not starting it yet)
    server = express();
    // Add live reload
    server.use(livereload({port: livereloadport}));
    // Use our 'public' folder as rootfolder
    server.use(express.static('./public'));
    // Because I like HTML5 pushstate .. this redirects everything back to our index.html
    server.all('/*', function (req, res) {
        res.sendfile('index.html', { root: 'public' });
    });

    paths = {
        js : [
            'app/vendor/angular/angular.js',
            'app/vendor/angular-ui-router/release/angular-ui-router.js',
            'app/vendor/angular-resource/angular-resource.js',
            'app/vendor/jquery/dist/jquery.js',
            'app/vendor/bootstrap/dist/js/bootstrap.js',
            'app/vendor/toastr/toastr.js',
            'app/vendor/textAngular/dist/textAngular-sanitize.min.js',
            'app/vendor/textAngular/dist/textAngular-rangy.min.js',
            'app/vendor/textAngular/dist/textAngular.min.js',
            'app/vendor/s3Upload/s3Upload.js',
            'app/main.js',
            'app/modules/**/*.js'
        ],
        testing: [
            'app/vendor/angular-mocks/angular-mocks.js',
            'test/unit/**/*.js'
        ]
    };

    // Dev task
    gulp.task('default', ['nodemon', 'views', 'styles', 'js', 'karma'], function () {
        //Start Mongo
        childProcess.exec('mongod', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
        });

        // Start webserver
        server.listen(serverport);
        // Start live reload
        lrserver.listen(livereloadport);
        // Run the watch task, to keep tags on changes
        gulp.watch(['app/main.js', 'app/modules/**/*.js'], ['js']);
        // Watch our less files
        gulp.watch(['app/main.less', 'app/modules/**/*.less'], [
            'styles'
        ]);

        gulp.watch(['app/index.html', 'app/modules/**/*.html'], [
            'views'
        ]);
    });
    
    gulp.task('bare', ['nodemon', 'views', 'styles', 'js'], function () {
        //Start Mongo
        childProcess.exec('mongod', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
        });
        // Start webserver
        server.listen(serverport);
        // Start live reload
        lrserver.listen(livereloadport);
        // Run the watch task, to keep tags on changes
        gulp.watch(['app/main.js', 'app/modules/**/*.js'], ['js']);
        // Watch our less files
        gulp.watch(['app/main.less', 'app/modules/**/*.less'], [
            'styles'
        ]);

        gulp.watch(['app/index.html', 'app/modules/**/*.html'], [
            'views'
        ]);
    });

    //Build task
    gulp.task('build', ['styles-dist', 'js-dist', 'views-dist']);

    // Styles task
    gulp.task('styles', function () {
        gulp.src('app/main.less')
            .pipe(plumber())
            .pipe(sourceMaps.init())
            .pipe(less().on('error', gutil.log))
            .pipe(sourceMaps.write())
            .pipe(gulp.dest('public/'))
            .pipe(refresh(lrserver));
    });

    gulp.task('styles-dist', function () {
        gulp.src('app/main.less')
            .pipe(less())
            .pipe(minifyCss())
            .pipe(gulp.dest('public/'));
    });

    // Views task
    gulp.task('views', function() {
        // Get our index.html
        gulp.src('app/index.html')
        .pipe(plumber())
        // And put it in the public folder
        .pipe(gulp.dest('public/'))
        .pipe(refresh(lrserver));

        // Any other view files from app/views
        gulp.src('app/modules/**/*.html')
        // Will be put in the public/views folder
        .pipe(flatten())
        .pipe(gulp.dest('public/views/'))
        .pipe(refresh(lrserver));
    });

    //Minify Html
    gulp.task('views-dist', function() {
      gulp.src('app/index.html')
      .pipe(minifyHtml({empty: true, quotes: true}))
      .pipe(gulp.dest('public/'));

      gulp.src('app/modules/**/*.html')
      .pipe(minifyHtml({empty: true, quotes: true}))
      .pipe(flatten())
      .pipe(gulp.dest('public/views/'));
    });

    //JS Task
    gulp.task('js', function() {
      gulp.src(paths.js)
      .pipe(plumber())
      .pipe(sourceMaps.init())
      .pipe(concat('app.js'))
//      .pipe(ngAnnotate())
      .pipe(sourceMaps.write())
      .pipe(gulp.dest('public/'))
      .pipe(refresh(lrserver));
    });

    gulp.task('js-dist', function() {
      gulp.src(paths.js)
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(gulp.dest('public/'));
    });

    gulp.task('nodemon', function() {
      nodemon({script: 'server.js', ext: 'js', env: {'NODE_ENV': 'development', 'DB': 'mongodb://localhost/jamieholliday', 'SESSION_SECRET': 'development'}, ignore: ['app/**/*.js', 'public/**/*.js', 'test/**/*.js']})
      .on('restart', function() {
        console.log('restarted');
      });
    });
    
    gulp.task('karma', function() {
        gulp.src(paths.js.concat(paths.testing))
        .pipe(karma({
            configFile: 'test/karma.conf.js',
            action: 'watch'
        }));
    });
    
    gulp.task('test', function() {
        return gulp.src(paths.js.concat(paths.testing))
        .pipe(karma({
            configFile: 'test/karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err){
            throw err;
        });
    });
})();