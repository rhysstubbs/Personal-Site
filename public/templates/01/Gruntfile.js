module.exports = function(grunt) {

  //Initializing the configuration object
  grunt.initConfig({
    pkg: grunt.file.readJSON('../../../package.json'),

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
          'assets/css/screen.min.css': 'assets/scss/screen.scss',
          'assets/css/print.min.css': 'assets/scss/print.scss'
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
          'assets/css/screen.css': 'assets/scss/screen.scss',
          'assets/css/print.css': 'assets/scss/print.scss'
        },
        
      }
    },

    // Allow sass globbing
    sass_globbing: {
      all: {
        files: {
          'assets/scss/utilities/_pages.scss': 'assets/scss/pages/**/*.scss'
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
          'assets/css/vendor.min.css': [
            '../../../../bower_components/FlexSlider/flexslider.css',
            '../../../../bower_components/magnific-popup/dist/magnific-popup.css'
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
          sourceMapName: 'assets/js/dist/vendor.min.map'
        },
        files: {
          'assets/js/dist/vendor.min.js': [

            // Core lib
            '../../../bower_components/html5shiv/dist/html5shiv.js',
            '../../../bower_components/respond/dest/respond.src.js',
            '../../../bower_components/eventEmitter/EventEmitter.js',
            '../../../bower_components/jquery/dist/jquery.js',

            // Bootstrap JS
            '../../../bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
            '../../../bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
            '../../../bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
            '../../../bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
            //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
            '../../../bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',

            // Other JS lib
            '../../../bower_components/parsleyjs/dist/parsley.js',
            '../../../bower_components/jquery.easing/js/jquery.easing.js',
            '../../../bower_components/jquery-placeholder/jquery.placeholder.js',
            '../../../bower_components/imagesloaded/imagesloaded.js',
            '../../../bower_components/magnific-popup/dist/jquery.magnific-popup.js',
            '../../../bower_components/FlexSlider/jquery.flexslider.js'
          ]
        }
      },

      // Custom code
      core: {
        options: {
          mangle: false,
          sourceMap: true,
          sourceMapName: 'assets/js/dist/core.min.map',
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'assets/js/dist/core.min.js': [
            'assets/js/core.js'
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
            '../../../fuel/app/views/**/*.twig',
            '../../../fuel/app/views/**/*.html',
            '../../../fuel/app/views/**/*.php',
            'cuts/**/*.html',
            'cuts/**/*.php',
            'assets/**/screen.min.css',
            'assets/**/print.min.css'
          ]
        }]
      }
    },

    // Build sprite file
    sprite: {
      all: {
        src: 'assets/images/sprites/**/*.png',
        dest: 'assets/images/sprite.png',
        destCss: 'assets/scss/utilities/_sprites.scss',
        cssTemplate: 'assets/scss/utilities/sprites.template.mustache',
        padding: 2,
        algorithm: 'binary-tree'
      }
    },

    // Copy vendor files
    copy: {
      fonts: {
        expand: true,
        src: [
          '../../../bower_components/fontawesome/fonts/**/*.{eot,svg,ttf,woff,woff2}',
          '../../../bower_components/FlexSlider/fonts/**/*.{eot,svg,ttf,woff,woff2}',
          '../../../bower_components/bootstrap-sass/**/*.{eot,svg,ttf,woff,woff2}'
        ],
        dest: 'assets/fonts/',
        flatten: true,
        filter: 'isFile',
      },
    },

    // Watch task
    watch: {
      options: {
        livereload: true
      },
      templates: {
        files: ['cuts/**/*.php', 'cuts/**/*.html', '../../../fuel/app/views/**/*.twig'],
      },
      sass: {
        files: ['assets/scss/**/*.scss'],
        tasks: ['sass_globbing', 'sass:dist']
      },
      sprite: {
        files: ['assets/images/sprites/**/*.png'],
        tasks: ['sprite']
      },
      vendorjs: {
        files: ['../../../bower_components/**/*.js'],
        tasks: ['uglify:vendor']
      },
      corejs: {
        files: ['assets/js/**/*.js', '!public/assets/js/dist/*.js'],
        tasks: ['uglify:core']
      },
      vendorcss: {
        files: ['../../../bower_components/**/*.css'],
        tasks: ['cssmin:vendor']
      },
      vendorfonts: {
        files: ['components/**/*.{eot,svg,ttf,woff,woff2}'],
        tasks: ['copy:fonts']
      }
    }

  });

  // Plugin loading
  grunt.loadNpmTasks('../../../grunt-spritesmith');
  grunt.loadNpmTasks('../../../grunt-contrib-copy');
  grunt.loadNpmTasks('../../../grunt-contrib-watch');
  grunt.loadNpmTasks('../../../grunt-contrib-concat');
  grunt.loadNpmTasks('../../../grunt-contrib-cssmin');
  grunt.loadNpmTasks('../../../grunt-contrib-uglify');
  grunt.loadNpmTasks('../../../grunt-sass-globbing');
  grunt.loadNpmTasks('../../../grunt-cache-bust');
  grunt.loadNpmTasks('../../../grunt-sass');

  // Task definition
  grunt.registerTask('dist', ['sprite', 'sass_globbing', 'sass:dist', 'uglify:vendor', 'uglify:core', 'cssmin:vendor', 'copy:fonts', 'cacheBust']);
  grunt.registerTask('dev', ['dist', 'watch']);
  grunt.registerTask('default', ['dev']);

};