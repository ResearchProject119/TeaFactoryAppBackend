const { route } = require("./troughMain");

module.exports = function(router){
    var bodyParser = require("body-parser");
	var jsonParser = bodyParser.json();
    const troughController = require("../../controllers/troughController");
   
    //Add trough route
    router.post(
        "/save_trough_details",
        jsonParser,
        troughController.addTroughController,
    );

    // view All trough
    router.get(
        "/view-all",
        jsonParser,
        troughController.viewAllTroughController,
    );

    // Update trough
    router.put(
        "/update-trough",
        jsonParser,
        troughController.updateTroughController,
    );

    // Delete trough
    router.put(
        "/delete-trough",
        jsonParser,
        troughController.deleteTroughController,
    ); 

    // View one trough
    router.get(
        "/view/single-trough",
        jsonParser,
        troughController.singleTroughViewController,
    )
    // View one trough
    router.post(
        "/predict",
        jsonParser,
        troughController.predict,
    )
};