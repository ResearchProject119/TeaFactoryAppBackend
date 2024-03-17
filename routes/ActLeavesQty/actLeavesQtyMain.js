var express = require('express');
var router = express.Router();

require('./actLeavesQtyRoutes')(router);

module.exports = router;