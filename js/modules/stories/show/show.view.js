/**
 *
 */

define([
		'app',
		'tpl!modules/stories/show/templates/story.html',
	], function(Wanor, tplStory){

		Wanor.module("Stories.Show.View", function(View, Wanor, Backbone, Marionette, $, _){

			View.ItemView = Marionette.ItemView.extend({
				template : tplStory
			});

		});

		return Wanor.Stories.Show.View;
	}
);