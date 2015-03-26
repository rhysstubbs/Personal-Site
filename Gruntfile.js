module.exports = function(grunt) {

  grunt.initConfig({
    hub: {
      all: {
      	options: {
	      concurrent: 5
	    },
        src: ['Gruntfile_cuts.js','Gruntfile_template01.js','Gruntfile_template02.js','Gruntfile_template03.js','Gruntfile_template04.js'],
        tasks: ['watch'],
      },
    },

  });
  grunt.loadNpmTasks('grunt-hub');
};