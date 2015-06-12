/**
 *
 */

define(['app'], function(Wanor) {

	Wanor.module("Stories", function(Stories, Wanor, Backbone, Marionette, $, _){

		/**
		 * Router
		 */
		Stories.Router = Marionette.AppRouter.extend({
			appRoutes : {
				"stories" : "listStories",
			}
		});

		/**
		 * API (main controller)
		 */
		var API = {
			// listStories
			listStories : function() {
				require(['modules/stories/list/list.controller'], function(StoriesListController) {
					StoriesListController.listStories();
				});
			},
			// showStory
			showStory : function( id ){
				require(['modules/stories/show/show.controller'], function(StoriesShowController) {
					StoriesShowController.showStory(id);
				});
			},
		}

		/**
		 * Events
		 */
		// story
		Wanor.on("story:show", function( id ) {
			Wanor.navigate("stories/" + id);
			return API.showStory(id);
		});

		/**
		 * Run
		 */
		// Initialiser
		Wanor.addInitializer(function() {
			new Stories.Router({
				controller : API
			});
		});
		// onStart
		Stories.on("start", function() {
			API.listStories();
		});

	});

	return Wanor.Stories;

});