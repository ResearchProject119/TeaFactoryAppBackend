var express = require("express");
var router = express.Router();

var userRoutes = require("./routes/user/userMain");
var troughRoutes = require("./routes/trough/troughMain");
var actLeavesQtyRoutes = require("./routes/ActLeavesQty/actLeavesQtyMain");

console.log("app awa")
router.use("/user",userRoutes)
router.use("/trough",troughRoutes)
router.use("/actual-leaves",actLeavesQtyRoutes)

module.exports = router;