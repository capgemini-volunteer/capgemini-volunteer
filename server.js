// REQUIRES ===========================================
const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const app         = express();

// CONFIGURATION ======================================
app.use(express.static(path.resolve(__dirname + './client/public'))); // Set static files location
app.use(bodyParser.urlencoded({ 'extended' : 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

let port = process.env.PORT || 8080;

// ROUTES =============================================
require('./server/routes')(app);

// START APP ==========================================
app.listen(port);
exports = module.exports = app;