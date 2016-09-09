/* global module */
module.exports = function(grunt) {
    'use strict';

    var bootstrapDir = 'node_modules/bootstrap/',
        jsSrc = [],
        lessSrc = 'assets/less/main.less';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            // Compiles LESS to CSS
            // Common options
            options: {
                // Specify dirs for @import directives
                paths: ['assets/less', 'node_modules/bootstrap/less'],
                strictUnits: true
            },
            dev: {
                options: {
                    compress: false,
                    // Generate source maps
                    sourceMap: true,
                    sourceMapFilename: 'hrz/static/css/main.dev.map', // where file is generated and located
                    sourceMapBasepath: 'assets', // This part is omitted from the referenced file URLS ...
                    sourceMapRootpath: '/static/', // .. and this is added instead
                    sourceMapURL: '/static/css/main.dev.map' // the complete url and filename put in the compiled css file
                },
                files: {
                    'hrz/static/css/main.dev.css': lessSrc
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'hrz/static/css/main.min.css': lessSrc
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: [
                        'jQuery'
                    ]
                },
                sourceMap: false,
                sourceMapIncludeSources: false,
                screwIE8: true,
                compress: {
                    drop_console: true
                }
            },
            production: {
                files: {
                    'hrz/static/js/main.min.js': jsSrc
                }
            }
        },
        concat: {
            // Concatinates javascript files
            options: {
                separator: grunt.util.linefeed
            },
            dev: {
                src: jsSrc,
                dest: 'hrz/static/js/main.dev.js'
            }
        },
        watch: {
            options: {livereload: true},
            less: {
                files: ['assets/less/*.less'],
                tasks: ['less:dev']
            },
            concat: {
                files: ['assets/js/*.js'],
                tasks: ['concat']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', 'Development tasks for watching style and script files', ['less:dev', 'concat']);
    grunt.registerTask('production', 'Builds static files for production use', ['less:production', 'uglify:production']);

};
