'use strict';

var path = require('path');

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            files: [
                '*.js'
            ],
            options: {
                jshintrc: path.normalize('.jshintrc')
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['test']);
};