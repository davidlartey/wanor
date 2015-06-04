/**
 *
 */

require.config({
	baseURL : 'js/',
	paths : {
		'jquery' : 'lib/jquery',
		'json2' : 'lib/json2',
		'underscore' : 'lib/underscore',
		'backbone' : 'lib/backbone',
		'marionette' : 'lib/backbone.marionette',
	},
	shims : {
		'backbone' : {
			deps : ['jquery', 'json2', 'underscore']
		},
		'marionette' : {
			deps : ['backbone']
		}
	}
});

require(['app'], function( Wanor ) {
	// Start App
	var Wanor = require('app'); // Get access to application from the global scope
	Wanor.start();

});