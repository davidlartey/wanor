/**
 *
 */

require.config({
	urlArgs: "bust=" + (new Date()).getTime(), // No caching of files (DEV)
    waitSeconds: 0, // Wait for each module indefinitely
	baseURL : 'js/',
	paths : {
		'jquery' : 'lib/jquery',
		'json2' : 'lib/json2',
		'underscore' : 'lib/underscore',
		'backbone' : 'lib/backbone',
		'marionette' : 'lib/backbone.marionette',
		'text' : 'lib/text',
		'tpl' : 'lib/underscore-tpl',
	},
	shim : {
		'backbone' : {
			deps : ['jquery', 'json2', 'underscore']
		},
		'marionette' : {
			deps : ['backbone']
		},
		'tpl' : {
			deps : ['text'],
		},
	}
	
});


require(['app'], function( Wanor ) {
	
	// Start App
	// var WanorApp = require('app'); // Get access to application from the global scope
	Wanor.start();

});
