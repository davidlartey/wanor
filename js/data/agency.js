/**
 *
 */

define(['app'], function(Wanor) {

	// Data.Agency module
	Wanor.module("Data", function(Data, Wanor, Backbone, Marionette, $, _) {
        
        // Agency Model
		Data.Agency = Backbone.Model.extend({
			urlRoot :  function() {
				return Wanor.APIBaseURL + 'agencies.json';
			},
		});

	});
	
	// Return model object
	return Wanor.Data;

});