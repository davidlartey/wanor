/**
 *
 */

define(['app'], function(Wanor){

	Wanor.module("Agencies.List.Main", function(Main, Wanor, Backbone, Marionette, $, _) {

		Main.Controller = {

			listAgencies : function() {
				require([
						'data/data',
						'modules/agencies/list/main/main.view',
					], function() {

						var fetchAgencies = Wanor.request("data:agencies");
						$.when(fetchAgencies).done(function(agencies) {

							var mainListView = new Main.CompositeView({
								collection: agencies
							});

							Wanor.commands.execute("show:main:content", mainListView);
						});

					}
				);
			}

		};

	});

	return Wanor.Agencies.List.Main.Controller;

});