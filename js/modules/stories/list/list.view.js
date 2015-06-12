/**
 *
 */

define([
		'app',
		'tpl!modules/stories/list/templates/list.html',
		'tpl!modules/stories/list/templates/item.html',
	], function(Wanor, tplList, tplItem){

		Wanor.module("Stories.List.View", function(View, Wanor, Backbone, Marionette, $, _){
			// Item View
			View.ItemView = Marionette.ItemView.extend({
				template : tplItem,
				ui : {
					readMoreBtn : 'a.story-more',
				},
				events : {
					"click @ui.readMoreBtn" : "showStory",
				},
				// show Story
				showStory : function(e) {
					e.preventDefault();
					Wanor.trigger("story:show", this.model.get("id"));
				}
			});

			// Composite View
			View.CompositeView = Marionette.CompositeView.extend({
				template : tplList,
				childView : View.ItemView,
				childViewContainer : 'div.panel-body',
			});

		});

		return Wanor.Stories.List;

	}
);