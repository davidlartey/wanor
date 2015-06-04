/**
 *
 */

define([
	'app', 
	'data/agency',
], function(Wanor, Agency) {

	Wanor.module("Data.Agencies", function(Agencies, Wanor, Backbone, Marionette, $, _) {
		Agencies = Backbone.Collection.extend({
			model : Agency,
		});
	});

	// Return
	return Wanor.Data.Agencies;

});