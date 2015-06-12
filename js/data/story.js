/**
 *
 */

define(['app'], function(Wanor){

	Wanor.module("Data", function(Data, Wanor, Backbone, Marionette, $, _){

		// Story model
		Data.Story = Backbone.Model.extend({
			defaults : {
				user : "Unverified User",
				story : "",
				categories : {},
				location : {},
				images : {},
				validations : {},
			}
		});

	});

	return Wanor.Data.Story;

});