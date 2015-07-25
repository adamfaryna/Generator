'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      buildDir: 'build',
      srcDir: 'app',
      testDir: 'test',
      bowerPath: 'bower_components',
      jshint: {
        all: [
          '<%= srcDir %>/**/*.js',
          '<%= testDir %>/**/*.js',
          'Gruntfile.js'
        ],
        options: {
          jshintrc: '.jshintrc'
        }
      },
      clean: {
        build: {
          files: [
            {
              dot: false,
              src: [
                '<%= buildDir %>'
              ]
            }
          ]
        }
      },
      jasmine: {
        src: '<%= srcDir %>/**/*.js',
        options: {
          specs: '<%= testDir %>/**/*.js',
          vendor: [
            '<%= bowerPath %>/jquery/dist/jquery.min.js',
            '<%= bowerPath %>/jasmine-jquery/lib/jasmine-jquery.js'
          ]
        }
      }
    }
  );

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['test']);
//  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('test', ['jasmine']);
}
;
