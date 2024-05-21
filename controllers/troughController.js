const troughService = require("../services/troughService");
const {
    ResponseStatusCodes,
} = require("../util/constants/responseStatusCodes");
const {
    ResponseCommonMessages,
} = require("../util/constants/responseCommonMessages");


//controller to add new trough
module.exports.addTroughController = async ( req, res ) => {
    try{
        const routeResponse = await troughService.addtroughDetails(
            req.body,
        );
        console.log(req.body);
        return res.status(200).json({
            success: true,
            data: routeResponse.data,
            showMessage: false,
        });
    } catch (err){
        return res
            .status(
                err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
            )
            .json({
                success: false,
                msg:
                    err.msg ||
                    ResponseCommonMessages.INTERNAL_SERVER_ERROR,
            });
    }
};

module.exports.viewAllTroughController = async (req, res) => {
    try{
        let routeResponse = await troughService.viewAllTroughs(req);
        return res.status(200).json({
            success: true,
            data: routeResponse.data,
            showMessage: false,
        });
    }
    catch{
        return res.status(
            err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
        )
        .json({
            success: false,
            msg: err.msg || 
                ResponseCommonMessages.INTERNAL_SERVER_ERROR,
        });
    }
};

module.exports.updateTroughController = async (req, res) => {
    try{
        let routeResponse = await troughService.updateTroughDetails(req.body);
        return res.status(200).json({
            success: true,
            data: routeResponse.data,
            showMessage: false,
        });
    }
    catch{
        return res.status(
            err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
        )
        .json({
            success: false,
            msg: err.msg || 
                ResponseCommonMessages.INTERNAL_SERVER_ERROR,
        });
    }
};


module.exports.deleteTroughController = async (req, res) => {
    try{
        let routeResponse = await troughService.deleteTroughService(req.body);
        return res.status(200).json({
            success: true,
            data: routeResponse.data,
            showMessage: false,
        });
    }
    catch{
        return res.status(
            err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
        )
        .json({
            success: false,
            msg: err.msg || 
                ResponseCommonMessages.INTERNAL_SERVER_ERROR,
        });
    }
};

module.exports.singleTroughViewController = async (req, res) => {
    try{
        let routeResponse = await troughService.singleViewTroughService(req.body);
        return res.status(200).json({
            success: true,
            data: routeResponse.data,
            showMessage: false,
        });
    }
    catch{
        return res.status(
            err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
        )
        .json({
            success: false,
            msg: err.msg || 
                ResponseCommonMessages.INTERNAL_SERVER_ERROR,
        });
    }
};

module.exports.predict = async (req, res) => {
    try{
        let routeResponse = await troughService.predict(req.body);
        return res.status(200).json({
            success: true,
            data: routeResponse.data,
            showMessage: false,
        });
    }
    catch{
        return res.status(
            err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR,
        )
        .json({
            success: false,
            msg: err.msg || 
                ResponseCommonMessages.INTERNAL_SERVER_ERROR,
        });
    }
};