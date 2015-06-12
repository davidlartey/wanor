/**
 *
 */

define(['app'], function(Wanor){

	Wanor.module("Agencies.Show", function(Show, Wanor, Backbone, Marionette, $, _) {

		Show.Controller = {

			// Show Controller
			showAgency : function(){
				require([
						'data/data',
						'modules/agencies/show/show.view'
					], function() {
						// Fetch module
						var fetchAgency = Wanor.request("data:agency");
						$.when(fetchAgency).done(function(agency){
							var agencyView = new Show.View.Agency({
								model : agency,
							});

							// Execute command show:main:content
							Wanor.execute("show:main:content", agencyView);
						});
					}
				);
			},

		};

	});

	// Return
	return Wanor.Agencies.Show.Controller;

});