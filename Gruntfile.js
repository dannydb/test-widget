module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  var gruntConfig = {
    less : {
      options : {
        plugins : [ new (require('less-plugin-autoprefix'))({browsers : [ "last 2 versions" ]}) ]
      },
      main : {
        files: {
          'public/style.css' : 'style.less'
        }
      }
    },
    watch: {
      styles: {
        files: ['style.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  };

  grunt.initConfig(gruntConfig);
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', [ 'less', 'watch' ]);
};
