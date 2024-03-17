var express = require("express");
var router = express.Router();

var userRoutes = require("./routes/user/userMain");
var troughRoutes = require("./routes/trough/troughMain");

console.log("app awa")
router.use("/user",userRoutes)
router.use("/trough",troughRoutes)

module.exports = router;