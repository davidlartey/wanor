/**
 *
 */

define(['app'], function(Wanor, Agency) {

	Wanor.module("Data", function(Data, Wanor, Backbone, Marionette, $, _) {

		// Agencies Collection
		Data.Agencies = Backbone.Collection.extend({
			model : Data.Agency,
		});

	});

	// Return
	return Wanor.Data;

});