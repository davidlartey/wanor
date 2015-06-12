/**
 *
 */

define([
		'app'
	], function(Wanor) {

		Wanor.module("Stories.List", function(List, Wanor, Backbone, Marionette, $, _) {

			List.Controller = {
				listStories : function() {
					//
					require([
							'data/data',
							'modules/stories/list/list.view',
						], function() {

							var requestStories = Wanor.reqres.request("data:stories");
							$.when(requestStories).done(function(stories){
								var storiesView = new List.View.CompositeView({
									collection : stories,
								});

								Wanor.commands.execute("show:main:content", storiesView);								
							});

						}
					);
				}
			};

		});

		// Return
		return Wanor.Stories.List.Controller;

	}
);