/**
 *
 */

define([
	'app',
	'tpl!modules/agencies/list/sidebar/templates/list_item.tpl',
	'tpl!modules/agencies/list/sidebar/templates/list.tpl',
], function(Wanor, tplListItem, tplList) {

	Wanor.module("Agencies.List.Sidebar", function(Sidebar, Wanor, Backbone, Marionette, $, _) {

		// Item View
		Sidebar.ItemView = Marionette.ItemView.extend({
			template : tplListItem,
			tagName : 'li',
			ui : {
				agencyLink : '.agency-item',
			},
			events : {
                "click @ui.agencyLink" : "showAgency"
			},
            
            // show agency
            showAgency : function(e) {
                e.preventDefault();
                Wanor.trigger("agency:show", this.model.get("id"));
            }
		});

		// Composite View
		Sidebar.View = Marionette.CompositeView.extend({
			template : tplList,
			childView : Sidebar.ItemView,
			childViewContainer : 'ul.nav',
			ui : {
				sidebarHeader : 'div.panel-heading',
			}, 
			events : {
				"click @ui.sidebarHeader" : "showAllAgencies"
			},
			// showAllAgencies
			showAllAgencies : function(e) {
				e.preventDefault();
				Wanor.trigger("agencies:show");
			},
		});

	});

	// Return
	return Wanor.Agencies.List.Sidebar;
});