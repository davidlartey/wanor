/**
 *
 */

define(['app'], function(Wanor) {

	Wanor.module("Agencies", function(Agencies, Wanor, Backbone, Marionette, $, _) {

		// Router
		Agencies.Router = Marionette.AppRouter.extend({
			appRoutes : {
				'agencies' : 'listAgencies',
				'agencies/:id' : 'showAgency',
			},

		});

		// API controller
		var API = {

			// Show Agencies List in sidebar
			listAgenciesSidebar : function() {
				require(['modules/agencies/list/sidebar/sidebar.controller'], function(SidebarListController) {
					SidebarListController.listAgencies();
				});

			},

			// Show Agencies List in main panel
			listAgencies : function() {
				require(['modules/agencies/list/main/main.controller'], function(MainListController){
					MainListController.listAgencies();
				});
			},

			// Show Agency details
			showAgency : function( id ) {
				require(['modules/agencies/show/show.controller'], function(ShowController){
					ShowController.showAgency();
				});
			}

		};

		/**
		 * Event handlings
		 */
		// Handles agency:show
		Wanor.on("agency:show", function(id) {
			Wanor.navigate("agencies/" + id);
			API.showAgency(id);
		});

		// Handles agencies:show
		Wanor.on("agencies:show", function() {
			Wanor.navigate("agencies");
			API.listAgencies();
		});

		/**
		 * Run 
		 */
		// Initialise
		Wanor.addInitializer(function() {
			new Agencies.Router({
				controller : API,
			});
		});

		// Agencies
		Agencies.on("start", function() {
			API.listAgenciesSidebar();
		});

	});

	// Return;
	return Wanor.Agencies;
});