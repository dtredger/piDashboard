
piDashboard.factory('HumidityResource', ['$resource', 
	function($resource) {
		return $resource('http://cuddlefish.co/v2/api');
	  // return $resource('http://localhost:8000/api', null, {
	  // 	'update': { method:'PUT' }
	  // });
	}

]);




// from webserver_pi/tornado_pi/tornado_app.py

// (r"/", MainHandler),
// (r"/datamountain", DataMountainHandler),
// (r"/graph(.*)", GraphHandler),
// (r"/api", ApiHandler),
// (r"/v2/api", v2ApiHandler),
// (r"/timelapse", TimelapseHandler)
// # (r"/bear", GameHandler)
// # (r"/webhooks", WebhooksHandler),
// # (r"/websocket", WebSocketHandler),