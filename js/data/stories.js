/**
 *
 */

define(['app'], function(Wanor){

	Wanor.module("Data", function(Data, Wanor, Backbone, Marionette, $, _){

		Data.Stories = Backbone.Collection.extend({
			model : Data.Story,
		});

	});


	return Wanor.Data;
});