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
                }
            }
        },
        'cssmin': {
            'main': {
                'files': {
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['copy', 'uglify', 'cssmin']);
};
