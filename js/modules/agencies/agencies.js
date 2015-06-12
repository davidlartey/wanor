/**
 *
 */

define(['app'], function(Wanor) {

	Wanor.module("Agencies", function(Agencies, Wanor, Backbone, Marionette, $, _) {

		// Router
		Agencies.Router = Marionette.AppRouter.extend({
			appRoutes : {
				'' : 'listAgenciesSidebar',
				'agencies' : 'listAgencies',
			}
		});

		// API
		var API = {
			// Show Agencies List in sidebar
			listAgenciesSidebar : function() {
				require(['modules/agencies/list/list_controller'], function(ListController) {
					ListController.listAgencies();
				});

			},

			// Show Agencies List in main panel
			listAgencies : function() {

			},
		};

		// Initialise
		Wanor.addInitializer(function() {
			new Agencies.Router({
				controller : API,
			});
		});

	});

	// Return;
	return Wanor.Agencies;
});