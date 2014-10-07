/**
 * Watching for changes
 */
'use strict';

var config = require('../config');

module.exports = {
	scss: {
		files: config.sass.files,
		tasks: 'sass:dist'
	},

	js: {
		files: [config.jsHintFiles, config.tests.src],
		tasks: ['jshint', 'karma:unit', 'concat:dist']
	},
    
    html: {
        files: '**/*.html',
        tasks: ['template']
    },

	livereload: {
		options: { livereload: true },
		files: [config.sass.devDest, config.js.files, config.img.src]
	},
};
