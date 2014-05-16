/*global exports:true, require:true */
var path = require('path');

module.exports = exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        concat: {
            options: {
                separator: ''
            },
            localforage: {
                src: [
                    'vendor/localforage/dist/localforage.js',
                    'src/LFStore.js'
                ],
                dest: 'dist/LFStore.js',
                options: {
                    banner:
                        '/*!\n' +
                        '    LFStore --LocalForage implementation, for ember.\n' +
                        '    Version 0.0.1\n' +
                        '*/\n'
                }
            }
        },
        uglify: {
            localforage: {
                files: {
                    'dist/LFStore.min.js': ['dist/LFStore.js']
                }
            }
        },
        watch: {
            build: {
                files: ['src/*.js', 'src/**/*.js'],
                tasks: ['build']
            },
            grunt: {
                files: [
                    'Gruntfile.js'
                ]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['concat', 'uglify']);
};
