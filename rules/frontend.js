'use strict';

module.exports = {
	env: {
		commonjs: true,
		node: false,
		webextensions: true
	},
	plugins: [
		'html'
	],
	settings: {
		'html/indent': 'tab',
		'html/report-bad-indent': 'error'
	},
	globals: {
		console: false, // for console.log
		document: false,
		process: false, // for process.env.NODE_ENV
		window: false
	},
	rules: {
		// in react, we have babel anyway, it auto inserts the `use strict` for us
		strict: ['error', 'never'],

		// in frontend, enable this for better version control
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline'
		}],

		// require camel case names
		// some config properties may have underscore names which is okay
		camelcase: ['error', {properties: 'never'}]
	}
};