/**
 *
 */

define(['app'], function(Wanor, Agency) {

	Wanor.module("Data", function(Data, Wanor, Backbone, Marionette, $, _) {

		// Agencies Collection
		Data.Agencies = Backbone.Collection.extend({
			url :  function() {
				return Wanor.APIBaseURL + "agencies.json";
			},
			model : Data.Agency,
		});

	});

	// Return
	return Wanor.Data;

});