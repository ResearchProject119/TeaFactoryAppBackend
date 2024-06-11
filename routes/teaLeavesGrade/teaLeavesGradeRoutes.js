const { route } = require("./teaLeavesGradeMain");

module.exports = function(router){
    var bodyParser = require("body-parser");
	var jsonParser = bodyParser.json();
    const teaLeavesGradeController = require("../../controllers/teaLeavesGradeController");
   
    //Add trough route
    router.post(
        "/add_teaLeavesDetails",
        jsonParser,
        teaLeavesGradeController.addTeaLeavesDetailsController,
    );

    // view All trough
    router.get(
        "/view_teaLeavesDetails",
        jsonParser,
        teaLeavesGradeController.viewTeaLeavesDetailsController,
    );

    // // Update trough
    // router.put(
    //     "/update-trough",
    //     jsonParser,
    //     troughController.updateTroughController,
    // );

    // // Delete trough
    // router.put(
    //     "/delete-trough",
    //     jsonParser,
    //     troughController.deleteTroughController,
    // ); 

    // // View one trough
    // router.get(
    //     "/view/single-trough",
    //     jsonParser,
    //     troughController.singleTroughViewController,
    // )
};