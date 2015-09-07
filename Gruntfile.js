module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['app/bootstrap.js', 'app/components/*/*.js'],
                dest: 'app/js/app.js'
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'app/css/app.css': 'app/scss/app.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie >= 9']
            },
            dist: {
                files: {
                    'app/css/app.css': 'app/css/app.css'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    open: true,
                    livereload: 35729
                }
            }
        },
        watch: {
            options: {
                livereload: 35729
            },
            js: {
                files: ['app/components/*/*.js', 'app/bootstrap.js'],
                tasks: ['js']
            },
            css: {
                files: ['app/scss/*.scss', 'app/scss/**/*.scss', 'app/components/**/*.scss'],
                tasks: ['css']
            },
            app: {
                files: ['index.html', 'app/**/*.ts', 'app/components/**/*.html']
            }
        }
    });

    grunt.registerTask('js', ['concat']);
    grunt.registerTask('css', ['sass', 'autoprefixer']);
    grunt.registerTask('build', ['js', 'css']);
    grunt.registerTask('server', ['build', 'connect', 'watch']);
}
;