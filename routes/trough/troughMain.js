var express = require('express');
var router = express.Router();
//var passport = require('passport');


//require('../../config/passport')(passport);

require('./troughRoutes')(router);

module.exports = router;