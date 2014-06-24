module.exports = function(grunt) {

  //Initializing the configuration object
  grunt.initConfig({

    // Build SCSS files
    sass: {
      dist: {
        options: {
          sourceMap: true,
          sourceComments: 'map',
          includePaths: ['public/assets/scss'],
          outputStyle: "compressed"
        },
        files: {
          'public/assets/css/screen.css': 'public/assets/scss/screen.scss',
          'public/assets/css/print.css': 'public/assets/scss/print.scss'
        }
      },
      dev: {
        options: {
          sourceMap: true,
          includePaths: ['public/assets/scss'],
          outputStyle: "nested"
        },
        files: {
          'public/assets/css/screen.css': 'public/assets/scss/screen.scss',
          'public/assets/css/print.css': 'public/assets/scss/print.scss'
        },
        
      }
    },

    // Build sprite file
    sprite: {
      all: {
        src: 'public/assets/images/sprites/**/*.png',
        destImg: 'public/assets/images/sprite.png',
        destCSS: 'public/assets/scss/utilities/sprites.scss',
        cssTemplate: 'public/assets/scss/utilities/sprites.template.mustache',
        padding: 2,
        algorithm: 'binary-tree'
      }
    },

    // Watch task
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['public/assets/scss/**/*.scss'],
        tasks: ['sass']
      },
      sprite: {
        files: ['public/assets/images/**/*.png'],
        tasks: ['sprite']
      }
    }

  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Task definition
  grunt.registerTask('dist', ['sprite', 'sass:dist']);
  grunt.registerTask('default', ['dist']);

};