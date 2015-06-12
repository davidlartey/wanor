/**
 *
 */

define([
		'app',
		'tpl!modules/common/templates/sidebar.html',
	], function(Wanor, tplSidebar){

		Wanor.module("Common.Sidebar", function(Sidebar, Wanor, Backbone, Marionette, $, _) {

			/**
			 * Views
			 */
			// Sidebar layout view.
			Sidebar.View = Marionette.LayoutView.extend({
				template : tplSidebar,
				regions : {
					list : '#sidebar-list',
					footer : '#sidebar-footer',
				}
			});
			// Instantiate
			// In the global scope of module function so other functions can use
			var sidebarView = new Sidebar.View();

			// Display on initialisation
			Wanor.addInitializer(function() {
				Wanor.appLayout.sidebar.show(sidebarView);
			});

			/**
			 * Event Handlers
			 */
			// Render list region
			Wanor.commands.setHandler("show:sidebar:list", function(view) {
				sidebarView.list.show(view)
			});
			
		});

		// Return
		return Wanor.Sidebar;
	}
);