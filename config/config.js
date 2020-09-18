/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "cs",
	timeFormat: 24,
	units: "metric",

	modules: [

	{
		module:"MMM-DumpsterDay",
  		position:"lower_third"
		},
		{
			module: "alert",
		},

		{
			module: "MMM-Snow",
			position: 'fullscreen_above',
			config: {
				month: 12
			}
		},
	
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_center"
		},
		
		{
			module: "calendar",
			header: "",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-day",
						url: "https://calendar.google.com/calendar/ical/5krsoovjkmehv7maotjfi3kjvs%40group.calendar.google.com/private-d4f1392d01da6f2d5d137fa903d217c1/basic.ics"}
				]
			}
		},
		

		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Trebechovice",
				locationID: "3074967",
				appid: "b40d141a572cc142fb3adb990da1d7c6"
			}
		},

		{
			module: "MMM-NowPlayingOnSpotify",
			position: "upper_third",
		  
			config: {
			  clientID: "a8e5fc271bba4042beb947cbc5bc9940",
			  clientSecret: "e7e141a74d2f449bb241d352944f22ae",
			  accessToken: "BQAEDQKldiLYKbkwhoI-gufOL4NhoKnZ0PFguk8yMff6wYTi2h2XCCbu9koKoFEP54G3yLx2jHPwGL6KBRoJrVgD92UzagNk0uAjuUpySZ7MXqQN4lGY0W4AjIchEFcUolRisSqeGRDdaHC6ubGMEYGohVk",
			  refreshToken: "AQCkmS9TzTBS-pqB3zCXAC5xASWrpL34QKGFNt_kpMZs9QlqHZn6GyYl-qECHXit5Gv0BKs4XRJNfImJII9vKjM3PJcLo0zayGW2xVQlSC6W10UnGOmrRRfRV0WBWCb4kX4"
			}
		  },
			 
		  
/*
		{
			module:"MMM-HonorKills",
			  position:"top_right"
			},
*/
			
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Trebechovice",
				locationID: "3074967",
				appid: "b40d141a572cc142fb3adb990da1d7c6"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "",
						url: "https://ct24.ceskatelevize.cz/rss/hlavni-zpravy?_ga=2.182845219.447675184.1571434046-1935067262.1570652859"
					}
				],
				showSourceTitle: false,
				showPublishDate: false,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
