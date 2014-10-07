/**
 * Grunt configuration
 */
'use strict';

var pkg = require('../package');

module.exports = {

	// A banner for distributed files (name, version, license, date)
	banner: '/*! ' + pkg.name + ' - v' + pkg.version + ' - MIT License - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %> */',

	destDir: 'dist/',
    
    self: this,

	requirejs: '../components/requirejs/require',

	// All files that should be checked with JSHint
	jsHintFiles: [
		'Gruntfile.js',
		'dev/js/**/*.js',
		'test/*.js',
		'test/specs/**/*.js'
	],

	// JavaScript files
	js: {
		files: [
			'js/**/*.js'
		],
		config: 'dev/js/config.js',
		dest: 'dist/main.min.js',
		devDest: 'dev/main.js'
	},

	// Sass files
	sass: {
		files: [
			'dev/scss/**/*.scss'
		],
		src: 'dev/scss/main.scss',
		devDest: 'dev/css/main.css',
		dest: 'dist/main.min.css'
	},

	// Modernizr files
	modernizr: {
		src: 'components/modernizr/modernizr.js',
		dest: 'dist/modernizr.min.js'
	},

	// Images
	img: {
		src: 'dev/img/',
		dest: 'dist/img/'
	},

	tests: {
		src: 'test/specs/**/*spec.js',
		config: 'test/test-main.js'
	},

	// Versioned references
	replace: {
		build: {
			src: 'dev/**.html',
			dest: 'dist/',
			maincss: 'main.min.css',
			modernizr: 'modernizr.min.js',
			mainjs: '<script src="main.min.js"></script>'
		},

		dev: {
			src: 'temp/**.html',
			dest: '.',
			maincss: 'dev/css/main.css',
			modernizr: 'components/modernizr/modernizr.js',
			mainjs: '<script data-main="js/config" src="main.js"></script>'
		}
	},
    
    concat: {
        js: {
            options: {
                footer: 'init();'
            },
          src: 'js/**/*.js',
          dest: 'dist/main.min.js',
        }
    }
};
