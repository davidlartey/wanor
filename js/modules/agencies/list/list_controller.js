/**
 *
 */

define(['app'], function(Wanor) {

	Wanor.module("Agencies.List", function(List, Wanor, Backbone, Marionette, $, _) {

		List.Controller = {

			// List agencies in sidebar
			listAgencies : function() {
				require([
					'data/data',
					'modules/agencies/list/list_view',
				], function() {
					// Request agencies data
					var fetchAgencies = Wanor.request("data:agencies");
					$.when(fetchAgencies).done(function(agencies) {
						// Sidebar List
						var sidebarListView = new List.View.Sidebar({
							collection : agencies,
						});

						// Display agencies in sidebar list
						// Executes this command that is handled by the common/sidebar.view
						Wanor.execute("show:sidebar:list", sidebarListView);
					});
				});
			},
			
		};

	});

	// Return
	return Wanor.Agencies.List.Controller;

});