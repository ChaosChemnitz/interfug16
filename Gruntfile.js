'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),
        'copy': {
            'main': {
                'files': [
                    {
                        'src': 'bower_components/angular/angular.min.js',
                        'dest': 'assets/scripts/angular.min.js'
                    },
                    {
                        'src': 'bower_components/angular-route/angular-route.min.js',
                        'dest': 'assets/scripts/angular-route.min.js'
                    }
                ]
            }
        },
        'uglify': {
            'main': {
                'files': {
                    'assets/scripts/interfug.min.js': [
                        'scripts/interfug.app.js',
                        'scripts/home.controller.js'
                    ]
                }
            }
        },
        'cssmin': {
            'main': {
                'files': {
                    'assets/styles/interfug.min.css': [
                        'styles/interfug.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['copy', 'uglify', 'cssmin']);
};
