/**
 *
 */

define(['app'], function( Wanor ) {

	Wanor.module("Stories.Show", function(Show, Wanor, Backbone, Marionette, $, _) {

		Show.Controller = {
			// showStory
			showStory : function(id) {
				require([
						'data/data',
						'modules/stories/show/show.view',
					], function() {
						var requestStory = Wanor.reqres.request("data:story", id);
						$.when(requestStory).done(function( story ) {

							var storyView = new Show.View.ItemView({
								model : story,
							});
							Wanor.commands.execute("show:main:content", storyView);
						});
					}
				);
			}
		};

	});

	return Wanor.Stories.Show.Controller;
});