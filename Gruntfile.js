//https://24ways.org/2013/grunt-is-not-weird-and-hard/


module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),



        responsive_images: {
          dev: {
            options: {
              engine: 'im',
              sizes: [{
                name: '',
                width: '30%',
                suffix: '_small',
                quality: 20
              },{
                name: '',
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
    //grunt.loadNpmTasks('grunt-contrib-concat', 'grunt-contrib-uglify', 'grunt-contrib-imagemin', 'grunt-contrib-watch', 'grunt-contrib-sass', 'grunt-responsive-images');
    grunt.loadNpmTasks('grunt-responsive-images');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['responsive_images']);

};