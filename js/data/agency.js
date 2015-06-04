/**
 *
 */

define(['app'], function(Wanor) {

	// Agencies module
	Wanor.module("Data.Agency", function(Agency, Wanor, Backbone, Marionette, $, _) {
		// Agency Model
		Agency = Backbone.Model.extend({

		});
	});
	
	// Return model object
	return Wanor.Data.Agency;

});