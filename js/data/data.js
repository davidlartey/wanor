/**
 *
 */

define([
    'app',
    'data/agency',
    'data/agencies',
], function(Wanor) {

	Wanor.module('Data', function(Data, Wanor, Backbone, Marionette, $, _) {
		
		/**
		 * Data API
		 * Access to all data used in the application should come through this object
		 */
		var API = {
			// Fetch a single entity by its id
			getAgency : function(id) {
				// $.Deffered
				var deferredResponse = $.Deferred();
				// Initialise and fetch agency instance with id
				var agency = new Agency({ id : id });
				agency.fetch({
					success : function(data) {
						deferredResponse.resolve(data);
					},
					error : function() {
						deferredResponse.resolve(undefined);
					},
				});
				// Return promise
				return deferredResponse.promise();
			},

			// Fetch all agencies
			getAgencies : function() {
				// $.Deffered
				var deferredResponse = $.Deferred();
				var agencies = new Data.Agencies();
				/*
				// fetch agencies
				agencies.fetch({
					success : function(data) {
						deferredResponse.resolve(data);
					},
					error : function() {
						deferredResponse.resolve(undefined);
					},
				});
				*/

				// Dummy Data
				var agency1 = new Data.Agency(
					{
	                     "id" : 1,
	                     "name": "ECG Distric Office, Ningo-Prampram Distric, Prampram.",
	                     "institution": "ECG",
	                     "phoneNumber": "555-0163",
	                     "location" : {
	                     	"lat" : "0.4567",
	                        	"lon" : "0.2345",
	                        }
				});
				var agency2 = new Data.Agency(
					{
	                     "id" : 2,
	                     "name": "CitiFM",
	                        "institution": "Radio Station",
	                        "phoneNumber": "555-0163",
	                        "location" : {
	                        	"lat" : "0.4567",
	                        	"lon" : "0.2345",
	                        }
				});
				var agency3 = new Data.Agency(
					{
	                        "id" : 3,
	                        "name": "NADMO office, Assylum Down, Accra",
	                        "institution": "NADMO",
	                        "phoneNumber": "555-0163",
	                        "location" : {
	                        	"lat" : "0.4567",
	                        	"lon" : "0.2345",
	                       }
				});
				var agency4 = new Data.Agency(
					{
	                        "id" : 4,
	                        "name": "Headquarters",
	                        "institution": "NADMO",
	                        "phoneNumber": {
	                        	1 : "233 (0) 302 780 221",
	                        	2 : "233 (0) 302 762 593"
	                        }
				});

				agencies.add([agency1, agency2, agency3, agency4]);
				deferredResponse.resolve(agencies);

				// Return promise
				return deferredResponse.promise();
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