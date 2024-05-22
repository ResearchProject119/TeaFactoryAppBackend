const { route } = require("./actLeavesQtyMain");

module.exports = function(router){
    var bodyParser = require("body-parser");
	var jsonParser = bodyParser.json();
    const actLeavesQtyController = require("../../controllers/actLeavesQtyController");
   
    //Add actual-leaves-details route
    router.post(
        "/save_actual-leaves-details",
        jsonParser,
        actLeavesQtyController.addactLeavesQtyController,
    );

    // view All actual-leaves-details
    router.get(
        "/view-all",
        jsonParser,
        actLeavesQtyController.viewAllactLeavesQtyController,
    );

    // Update actual-leaves-details
    router.put(
        "/update-actual-leaves-details",
        jsonParser,
        actLeavesQtyController.updateactLeavesQtyController,
    );

    // Delete actual-leaves-details
    router.put(
        "/delete-actual-leaves-details",
        jsonParser,
        actLeavesQtyController.deleteactLeavesQtyController,
    ); 

    // View one actual-leaves-details
    router.post(
        "/view/single-actual-leaves-details",
        jsonParser,
        actLeavesQtyController.singleViewactLeavesQtyController,
    )
};