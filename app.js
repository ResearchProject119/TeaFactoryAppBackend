var express = require("express");
var router = express.Router();

var userRoutes = require("./routes/user/userMain");
var troughRoutes = require("./routes/trough/troughMain");
var teaLeavesGradeMain = require("./routes/teaLeavesGrade/teaLeavesGradeMain");

console.log("app awa")
router.use("/user",userRoutes)
router.use("/trough",troughRoutes)
router.use("/teaLeavesDetails",teaLeavesGradeMain)

module.exports = router;