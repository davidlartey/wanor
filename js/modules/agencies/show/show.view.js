/***
 *
 */

define([
		'app',
		'tpl!modules/agencies/show/templates/agency.html',
	], function(Wanor, tplAgency){

		Wanor.module("Agencies.Show.View", function(View, Wanor, Backbone, Marionette, $, _){

			// Single Agency details page
			View.Agency = Marionette.ItemView.extend({
				template : tplAgency,
			});

		});

		return Wanor.Agencies.Show.View;

	}
);