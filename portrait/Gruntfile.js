module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  	less: {
  	  development: {
  	    options: {
  	      paths: ["css"]
  	    },
  	    files: {
  	      "css/test.css": "css/test.less"
  	    }
  	  }
  	}
  });

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  
  // Default task(s).
  grunt.registerTask('default', ['less']);

};