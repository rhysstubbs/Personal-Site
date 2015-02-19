module.exports = function(grunt) {

  //Initializing the configuration object
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Build SCSS files
    sass: {
      dist: {
        options: {
          sourceMap: true,
          sourceComments: false,
          includePaths: ['public/assets/scss'],
          outputStyle: "compressed"
        },
        files: {
          'public/assets/css/screen.min.css': 'public/assets/scss/screen.scss',
          'public/assets/css/print.min.css': 'public/assets/scss/print.scss'
        }
      },
      dev: {
        options: {
          sourceMap: true,
          sourceComments: true,
          includePaths: ['public/assets/scss'],
          outputStyle: "nested"
        },
        files: {
          'public/assets/css/screen.css': 'public/assets/scss/screen.scss',
          'public/assets/css/print.css': 'public/assets/scss/print.scss'
        },
        
      }
    },

    // Allow sass globbing
    sass_globbing: {
      all: {
        files: {
          'public/assets/scss/utilities/_pages.scss': 'public/assets/scss/pages/**/*.scss'
        }
      }
    },

    // Concatenate and minify CSS
    cssmin: {
      vendor: {
        options: {
          sourceMap: true
        },
        files: {
          'public/assets/css/vendor.min.css': [
            'public/components/FlexSlider/flexslider.css',
            'public/components/magnific-popup/dist/magnific-popup.css'
          ]
        }
      }
    },

    // Concatenate and compress JS
    uglify: {

      // Vendor libraries
      vendor: {
        options: {
          mangle: false,
          sourceMap: true,
          sourceMapName: 'public/assets/js/dist/vendor.min.map'
        },
        files: {
          'public/assets/js/dist/vendor.min.js': [

            // Core libs
            'public/components/html5shiv/dist/html5shiv.js',
            'public/components/respond/dest/respond.src.js',
            'public/components/eventEmitter/EventEmitter.js',
            'public/components/jquery/dist/jquery.js',

            // Bootstrap JS
            'public/components/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
            'public/components/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
            //'public/components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
            //'public/components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
            'public/components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
            'public/components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
            //'public/components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
            //'public/components/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
            //'public/components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
            //'public/components/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
            //'public/components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
            'public/components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',

            // Other JS libs
            'public/components/parsleyjs/dist/parsley.js',
            'public/components/jquery.easing/js/jquery.easing.js',
            'public/components/jquery-placeholder/jquery.placeholder.js',
            'public/components/imagesloaded/imagesloaded.js',
            'public/components/magnific-popup/dist/jquery.magnific-popup.js',
            'public/components/FlexSlider/jquery.flexslider.js'
          ]
        }
      },

      // Custom code
      core: {
        options: {
          mangle: false,
          sourceMap: true,
          sourceMapName: 'public/assets/js/dist/core.min.map',
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'public/assets/js/dist/core.min.js': [
            'public/assets/js/core.js'
          ],
        }
      }
      
    },

    // Cache bust
    cacheBust: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 16,
        rename: false,
        enableUrlFragmentHint: true
      },
      assets: {
        files: [{
          baseDir: 'public/',
          src: [
            'fuel/app/views/**/*.twig',
            'fuel/app/views/**/*.html',
            'fuel/app/views/**/*.php',
            'public/cuts/**/*.html',
            'public/cuts/**/*.php',
            'public/assets/**/*.css'
          ]
        }]
      }
    },

    // Build sprite file
    sprite: {
      all: {
        src: 'public/assets/images/sprites/**/*.png',
        dest: 'public/assets/images/sprite.png',
        destCss: 'public/assets/scss/utilities/_sprites.scss',
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
      templates: {
        files: ['public/cuts/**/*.php', 'public/cuts/**/*.html', 'fuel/app/views/**/*.twig'],
      },
      sass: {
        files: ['public/assets/scss/**/*.scss'],
        tasks: ['sass_globbing', 'sass:dist']
      },
      sprite: {
        files: ['public/assets/images/sprites/**/*.png'],
        tasks: ['sprite']
      },
      vendorjs: {
        files: ['public/components/**/*.js'],
        tasks: ['uglify:vendor']
      },
      corejs: {
        files: ['public/assets/js/**/*.js', '!public/assets/js/dist/*.js'],
        tasks: ['uglify:core']
      },
      vendorcss: {
        files: ['public/components/**/*.css'],
        tasks: ['cssmin:vendor']
      }
    }

  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-cache-bust');
  grunt.loadNpmTasks('grunt-sass');

  // Task definition
  grunt.registerTask('dist', ['sprite', 'sass_globbing', 'sass:dist', 'uglify:vendor', 'uglify:core', 'cssmin:vendor', 'cacheBust']);
  grunt.registerTask('dev', ['dist', 'watch']);
  grunt.registerTask('default', ['dev']);

};