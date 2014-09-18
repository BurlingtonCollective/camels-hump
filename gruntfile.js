module.exports = function(grunt){
	grunt.initConfig({
		less: {
			development: {
				options: {
					yuicompress: true,
					paths: ["css"],
					livereload: true,
					sourceMap: true
				},
				files: {
					'css/master.css': 'css/master.less'
				}
			}
		},
		watch: {
			less: {
				options: {
					livereload: true
				},
				files: ['css/**/*.less'],
				tasks: ['less:development']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
}