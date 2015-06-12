/**
 *
 */

define([
		'marionette',
		'tpl!modules/common/templates/start.html',
	], function(Marionette, tplStart) {
		
		// Application
		var Wanor = new Marionette.Application();

		// Main Layout
		var RootLayout = Marionette.LayoutView.extend({
			template : tplStart,
			el : '#app-layout',
			regions : {
				header : "#header",
				sidebar : "#sidebar",
				main : '#main',
			}
		});
		Wanor.appLayout = new RootLayout();
		Wanor.appLayout.render();

		/**
		 * Helper Functions
		 */
		// Update the browser's location bar
		Wanor.navigate = function(route, options) {
			options || (options = {});
			Backbone.history.navigate(route);
		};

	    // Get current Route
	    Wanor.getCurrentRoute = function() {
			return Backbone.history.fragment;
	    };

	    /**
	     * Run App
	     */
		// On Start event
		Wanor.on('start', function() {
			// Run agencies module
			require([
					'modules/header/header',
					'modules/common/sidebar',
					'modules/common/main',
					'modules/agencies/agencies',
				], function() {

					// Start backbone.history
					if (Backbone.history && !Backbone.history.started) {
						Backbone.history.start();
					}

				}
			);
		});

		// Return
		return Wanor;
	}
);