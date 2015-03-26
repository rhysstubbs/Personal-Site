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
          includePaths: ['public/templates/04/assets/scss'],
          outputStyle: "compressed"
        },
        files: {
          'public/templates/04/assets/css/screen.min.css': 'public/templates/04/assets/scss/screen.scss',
          'public/templates/04/assets/css/print.min.css': 'public/templates/04/assets/scss/print.scss'
        }
      },
      dev: {
        options: {
          sourceMap: true,
          sourceComments: true,
          includePaths: ['public/templates/04/assets/scss'],
          outputStyle: "nested"
        },
        files: {
          'public/templates/04/assets/css/screen.css': 'public/templates/04/assets/scss/screen.scss',
          'public/templates/04/assets/css/print.css': 'public/templates/04/assets/scss/print.scss'
        },
        
      }
    },

    // Allow sass globbing
    sass_globbing: {
      all: {
        files: {
          'public/templates/04/assets/scss/utilities/_pages.scss': 'public/templates/04/assets/scss/pages/**/*.scss'
        }
      }
    },

    // Concatenate and minify CSS
    cssmin: {
      vendor: {
        options: {
          sourceMap: false
        },
        files: {
          'public/templates/04/assets/css/vendor.min.css': [
            'bower_components/FlexSlider/flexslider.css',
            'bower_components/magnific-popup/dist/magnific-popup.css'
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
          sourceMapName: 'public/templates/04/assets/js/dist/vendor.min.map'
        },
        files: {
          'public/templates/04/assets/js/dist/vendor.min.js': [

            // Core libs
            'bower_components/html5shiv/dist/html5shiv.js',
            'bower_components/respond/dest/respond.src.js',
            'bower_components/eventEmitter/EventEmitter.js',
            'bower_components/jquery/dist/jquery.js',

            // Bootstrap JS
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',

            // Other JS libs
            'bower_components/parsleyjs/dist/parsley.js',
            'bower_components/jquery.easing/js/jquery.easing.js',
            'bower_components/jquery-placeholder/jquery.placeholder.js',
            'bower_components/imagesloaded/imagesloaded.js',
            'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
            'bower_components/FlexSlider/jquery.flexslider.js'
          ]
        }
      },

      // Custom code
      core: {
        options: {
          mangle: false,
          sourceMap: true,
          sourceMapName: 'public/templates/04/assets/js/dist/core.min.map',
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'public/templates/04/assets/js/dist/core.min.js': [
            'public/templates/04/assets/js/core.js'
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
          baseDir: 'public/templates/04/',
          src: [
            'fuel/app/views/**/*.twig',
            'fuel/app/views/**/*.html',
            'fuel/app/views/**/*.php',
            'public/templates/04/cuts/**/*.html',
            'public/templates/04/cuts/**/*.php',
            'public/templates/04/assets/**/screen.min.css',
            'public/templates/04/assets/**/print.min.css'
          ]
        }]
      }
    },

    // Build sprite file
    sprite: {
      all: {
        src: 'public/templates/04/assets/images/sprites/**/*.png',
        dest: 'public/templates/04/assets/images/sprite.png',
        destCss: 'public/templates/04/assets/scss/utilities/_sprites.scss',
        cssTemplate: 'public/templates/04/assets/scss/utilities/sprites.template.mustache',
        padding: 2,
        algorithm: 'binary-tree'
      }
    },

    // Copy vendor files
    copy: {
      fonts: {
        expand: true,
        src: [
          'bower_components/fontawesome/fonts/**/*.{eot,svg,ttf,woff,woff2}',
          'bower_components/FlexSlider/fonts/**/*.{eot,svg,ttf,woff,woff2}',
          'bower_components/bootstrap-sass/**/*.{eot,svg,ttf,woff,woff2}'
        ],
        dest: 'public/templates/04/assets/fonts/',
        flatten: true,
        filter: 'isFile',
      },
    },

    // Watch task
    watch: {
      options: {
        livereload: false
      },
      templates: {
        files: ['public/templates/04/cuts/**/*.php', 'public/templates/04/cuts/**/*.html', 'fuel/app/views/**/*.twig'],
      },
      sass: {
        files: ['public/templates/04/assets/scss/**/*.scss'],
        tasks: ['sass_globbing', 'sass:dist']
      },
      sprite: {
        files: ['public/templates/04/assets/images/sprites/**/*.png'],
        tasks: ['sprite']
      },
      vendorjs: {
        files: ['bower_components/**/*.js'],
        tasks: ['uglify:vendor']
      },
      corejs: {
        files: ['public/templates/04/assets/js/**/*.js', '!public/templates/04/assets/js/dist/*.js'],
        tasks: ['uglify:core']
      },
      vendorcss: {
        files: ['bower_components/**/*.css'],
        tasks: ['cssmin:vendor']
      },
      vendorfonts: {
        files: ['public/templates/04/components/**/*.{eot,svg,ttf,woff,woff2}'],
        tasks: ['copy:fonts']
      }
    }

  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-cache-bust');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-hub');

  // Task definition
  grunt.registerTask('dist', ['sprite', 'sass_globbing', 'sass:dist', 'uglify:vendor', 'uglify:core', 'cssmin:vendor', 'copy:fonts', 'cacheBust']);
  grunt.registerTask('dev', ['dist', 'watch']);
  grunt.registerTask('default', ['dev']);

};