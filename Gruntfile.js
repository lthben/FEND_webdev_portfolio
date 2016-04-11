//https://24ways.org/2013/grunt-is-not-weird-and-hard/


module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
        }

        uglify: {
          build: {
            src: 'js/build/production.js',
            dest: 'js/build/production.min.js'
          }
        }

        imagemin: {
           dynamic: {
            files: [{
              expand: true,
              cwd: 'images/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'images/build/'
            }]
          }
        }

        watch: {
          scripts: {
            files: ['js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
            spawn: false,
            },
          }

          css: {
            files: ['css/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
            }
          }
        }


        sass: {
          dist: {
            options: {
              style: 'compressed'
            },
            files: {
            'css/build/global.css': 'css/global.scss'
            }
          }
        }

        responsive_images: {
          dev: {
            options: {
              engine: 'im',
              sizes: [{
                name: 'small',
                width: '30%',
                suffix: '_small',
                quality: 20
              },{
                name: 'large',
                width: '50%',
                suffix: '_large',
                quality: 40
              }]
            },
            files: [{
              expand: true,
              src: ['*.{gif,jpg,png}'],
              cwd: 'images/',
              dest: 'images/'
            }]
          }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat', 'grunt-contrib-uglify', 'grunt-contrib-imagemin', 'grunt-contrib-watch', 'grunt-contrib-sass', 'grunt-responsive-images');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch', 'sass']);

};