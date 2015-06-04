/**
 *
 */

define(['marionette'], function(Marionette) {

	var Wanor = new Marionette.Application();


	// Navigation: updates browser location bar
	Wanor.navigate = function(route, options) {
		options || (options = {});
		Backbone.history.navigate(route);
	};

    // Get current Route
    Wanor.getCurrentRoute = function() {
		return Backbone.history.fragment;
    };

	// On Start event
	Wanor.on('start', function() {
		// Start backbone.history
		if (Backbone.history && !Backbone.history.started) {
			Backbone.history.start();
		}
	});

	// Return
	return Wanor;
});