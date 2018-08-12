// REQUIRES ===========================================
const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const app         = express();
const cors        = require('cors');

const router = express.Router();              // get an instance of the express Router
// CONFIGURATION ======================================
app.use(bodyParser.urlencoded({ 'extended' : 'true' }));
app.use(bodyParser.json());
app.use(cors());

let port = process.env.PORT || 8080;

router.get('/api/register/', function(req, res) {
    console.log("ok");
    res.send("{ok:[]}");
});
app.use('/api/register', router);

// START APP ==========================================
app.listen(port);
exports = module.exports = app;