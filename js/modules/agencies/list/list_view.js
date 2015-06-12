/**
 *
 */

define([
	'app',
	'tpl!modules/agencies/list/templates/list_item.tpl',
	'tpl!modules/agencies/list/templates/list.tpl',
], function(Wanor, tplListItem, tplList) {

	Wanor.module("Agencies.List.View", function(View, Wanor, Backbone, Marionette, $, _) {

		// Item View
		View.SidebarItem = Marionette.ItemView.extend({
			template : tplListItem,
			tagName : 'li',
			ui : {
				
			},
			events : {

			}
		});

		// Composite View
		View.Sidebar = Marionette.CompositeView.extend({
			template : tplList,
			childView : View.SidebarItem,
			childViewContainer : 'ul.nav',
		});

	});

	// Return
	return Wanor.Agencies.List.View;
});