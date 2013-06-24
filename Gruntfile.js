'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    livereload: {
      port: 35729 // Default livereload listening port.
    },
    connect: {
      livereload: {
        options: {
          port: 9001,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, options.base)]
          }
        }
      }
    },
    
    regarde: {
      txt: {
        files: ['**/*.html', 'css/style.scss'],
        tasks: ['sass:dev', 'livereload']
      }
    },

    sass: {
      dist: {
        files: {
          'css/style.css': 'css/style.scss'
        }
      },
      dev: {                            
            options: {                    
              style: 'expanded'
            },
            files: {
              'css/style.css': 'css/style.scss'
            }
          }
    }

  });

  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
  grunt.registerTask('dist', ['sass:dist']);
};