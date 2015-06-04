/**
 *
 */

define(['app'], function(Wanor) {

	Wanor.module('Data', function(Data, Wanor, Backbone, Marionette, $, _) {

		// API
		var API = {
			getAgency : function(id) {
				//
				require(['data/agency'], function(Agency) {
					var deferredResponse = $.Deferred();
					/*
					// Initialise agency instance with id
					var agency = new Agency({ id : id });
					agency.fetch({
						success : function(data) {
							deferredResponse.resolve(data);
						},
						error : function() {
							deferredResponse.resolve(undefined);
						}
					});
					*/

					var agency = 
	                    {
	                        id : 1,
	                        name: "ECG Distric Office, Ningo-Prampram Distric, Prampram.",
	                        institution: "ECG",
	                        phoneNumber: "555-0163",
	                        location : {
	                        	"lat" : "0.4567",
	                        	"lon" : "0.2345",
	                        }
	                    };

	                deferredResponse.resolve(agency);
					return deferredResponse.promise();
				});
			},
			getAgencies : function() {
				//
				require(['data/agencies'], function(Agencies) {
					var deferredResponse = $.Deferred();
					/*
					// Initialise agency instance with id
					var agencies = new Agencies();
					agencies.fetch({
						success : function(data) {
							deferredResponse.resolve(data);
						},
						error : function() {
							deferredResponse.resolve(undefined);
						}
					});

					*/

					var agencies = [
	                    {
	                        id : 1,
	                        name: "ECG Distric Office, Ningo-Prampram Distric, Prampram.",
	                        institution: "ECG",
	                        phoneNumber: "555-0163",
	                        location : {
	                        	"lat" : "0.4567",
	                        	"lon" : "0.2345",
	                        }
	                    },
	                    {
	                        id : 2,
	                        name: "CitiFM",
	                        institution: "Radio Station",
	                        phoneNumber: "555-0163",
	                        location : {
	                        	"lat" : "0.4567",
	                        	"lon" : "0.2345",
	                        }
	                    },
	                    {
	                        id : 1,
	                        name: "NADMO office, Assylum Down, Accra",
	                        institution: "NADMO",
	                        phoneNumber: "555-0163",
	                        location : {
	                        	"lat" : "0.4567",
	                        	"lon" : "0.2345",
	                        }
	                    }
	                ];
					
					deferredResponse.resolve(agencies);

					return deferredResponse.promise();
				});
			},

		};

		/**
		 * Events
		 */
		// Get an agency
		Wanor.reqres.setHandler("data:agency", function(id) {
			return API.getAgency(id);
		});
		// Get agencies
		Wanor.reqres.setHandler("data:agencies", function() {
			return API.getAgencies();
		});
	});

	// Return nothing. This module will be communicated with using events messaging
	return;

});