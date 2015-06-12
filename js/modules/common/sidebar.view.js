/**
 *
 */

define([
		'app',
		'tpl!modules/common/templates/sidebar.html',
	], function(Wanor, tplSidebar){

		Wanor.module("Sidebar", function(Sidebar, Wanor, Backbone, Marionette, $, _) {

			// View.
			Sidebar.View = Marionette.LayoutView.extend({
				template : tplSidebar,
				regions : {
					list : '#sidebar-list',
					footer : '#sidebar-footer',
				}
			});

			// Display
			var sidebarView = new Sidebar.View();
			Wanor.appLayout.sidebar.show(sidebarView);

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