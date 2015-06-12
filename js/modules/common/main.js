/**
 *
 */

define([
		'app',
		'tpl!modules/common/templates/main.html',
	], function(Wanor, tplMain) {


		Wanor.module("Common.Main", function(Main, Wanor, Backbone, Marionette, $, _){

			/**
			 * Views
			 */
			Main.LayoutView = Marionette.LayoutView.extend({
				template : tplMain,
				regions : {
					map : '#main-map',
					header : '#main-header',
					content : '#main-content',
				}
			});
			// Instantiate here so other functions can within can use variable
			var mainLayoutView = new Main.LayoutView();

			// Display on app's initialisation
			Wanor.addInitializer(function() {
				Wanor.appLayout.main.show(mainLayoutView);
			});

			/**
			 * Events Handling
			 */
			Wanor.commands.setHandler("show:main:content", function(view) {
				mainLayoutView.content.show(view);
			});


		});

		return Wanor.Common.Main;
	}
);