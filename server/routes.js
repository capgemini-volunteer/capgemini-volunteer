const path = require('path');

module.exports = function(app) {
    app.get('/api/data', function(req, res) {});

    app.get('*', function(req, res) {
	    res.send("Hello World!");
    });
}