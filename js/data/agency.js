/**
 *
 */

define(['app'], function(Wanor) {

	// Data.Agency module
	Wanor.module("Data", function(Data, Wanor, Backbone, Marionette, $, _) {
        
        // Agency Model
		Data.Agency = Backbone.Model.extend({});

	});
	
	// Return model object
	return Wanor.Data;

});