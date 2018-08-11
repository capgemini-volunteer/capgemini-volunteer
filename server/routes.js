const path = require('path');

module.exports = function(app) {
    /*
     * Route for retrieving the JSON from imageGallery.json.
     */
    app.get('/api/data', function(req, res) {});

    /*
     * Default server page.
     */
    app.get('*', function(req, res) {
	    res.send("Hello World!");
    });
}