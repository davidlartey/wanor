/**
 *
 */

define([
    'app',
    'data/agency',
    'data/agencies',
    'data/story',
    'data/stories',
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
				/*
				var agency = new Data.Agency({ id : id });
				agency.fetch({
					success : function(data) {
						deferredResponse.resolve(data);
					},
					error : function() {
						deferredResponse.resolve(undefined);
					},
				});
				*/
				// Dummy data
				var agency = new Data.Agency(
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
				deferredResponse.resolve(agency);
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

			// Fetch a story
			getStory : function( id ){
				// $.Deffered
				var deferredResponse = $.Deferred();
				// Initialise and fetch agency instance with id
				/*
				var agency = new Data.Agency({ id : id });
				agency.fetch({
					success : function(data) {
						deferredResponse.resolve(data);
					},
					error : function() {
						deferredResponse.resolve(undefined);
					},
				});
				*/
				// Dummy data
				var dummyStory = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
				var story = new Data.Story({
	            	"id" : 2,
	                "user" : "Jane Doe",
	                "story" : dummyStory,
				});
				deferredResponse.resolve(story);
				// Return promise
				return deferredResponse.promise();
			},

			// Fetch all stories
			getStories : function() {
				// $.Deffered
				var deferredResponse = $.Deferred();
				var stories = new Data.Stories();
				/*
				// fetch agencies
				stories.fetch({
					success : function(data) {
						deferredResponse.resolve(data);
					},
					error : function() {
						deferredResponse.resolve(undefined);
					},
				});
				*/
				// Dummy Data
				var dummyStory = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
				var story1 = new Data.Story({
	            	"id" : 1,
	                "user" : "John Doe",
	                "story" : dummyStory,
				});
				var story2 = new Data.Story({
	            	"id" : 2,
	                "user" : "Jane Doe",
	                "story" : dummyStory,
				});
				var story3 = new Data.Story({
	            	"id" : 3,
	                "user" : "Jane Doe",
	                "story" : dummyStory,
				});
				var story4 = new Data.Story({
	            	"id" : 4,
	                "user" : "John Doe",
	                "story" : dummyStory,
				});
				stories.add([story1, story2, story3, story4]);
				deferredResponse.resolve(stories);

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
		// Get a story
		Wanor.reqres.setHandler("data:story", function(id){
			return API.getStory(id);
		});
		// Get stories
		Wanor.reqres.setHandler("data:stories", function() {
			return API.getStories(); 
		})

	});

	// Return nothing. This module will be communicated with using events messaging
	return;

});