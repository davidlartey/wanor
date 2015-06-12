/**
 *
 */

define([
		'app',
		'tpl!modules/agencies/list/main/templates/main.html',
		'tpl!modules/agencies/list/main/templates/main.item.html',
	], function(Wanor, tplMain, tplMainItem){

	Wanor.module("Agencies.List.Main", function(Main, Wanor, Backbone, Marionette, $, _){

		// Item View
		Main.ItemView = Marionette.ItemView.extend({
			template : tplMainItem,
			tagName : 'tr',
			ui : {
				contactBtn : 'a.agency-contact',
			},
			events : {
				"click @ui.contactBtn" : "showAgency"
			},
			// showAgency
			showAgency : function(e) {
				e.preventDefault();
				Wanor.trigger("agency:show", this.model.get("id"));
			}
		});

		Main.CompositeView = Marionette.CompositeView.extend({
			template : tplMain,
			childView : Main.ItemView,
			childViewContainer : 'tbody',
		});

	});

	return Wanor.Agencies.List.Main;

});