const actLeavesQtyService = require("../services/actLeavesQtyService");
const {
    ResponseStatusCodes,
} = require("../util/constants/responseStatusCodes");
const {
    ResponseCommonMessages,
} = require("../util/constants/responseCommonMessages");


//controller to add new leaves qty
module.exports.addactLeavesQtyController = async ( req, res ) => {
    try{
        const routeResponse = await actLeavesQtyService.addActLeavesQtyService(
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

module.exports.viewAllactLeavesQtyController = async (req, res) => {
    try{
        let routeResponse = await actLeavesQtyService.viewActLeavesQtyService(req);
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

module.exports.updateactLeavesQtyController = async (req, res) => {
    try{
        let routeResponse = await actLeavesQtyService.updateActLeavesQtyService(req.body);
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


module.exports.deleteactLeavesQtyController = async (req, res) => {
    try{
        let routeResponse = await actLeavesQtyService.deleteActLeavesQtyService(req.body);
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

module.exports.singleViewactLeavesQtyController = async (req, res) => {
    try{
        let routeResponse = await actLeavesQtyService.singleViewActLeavesQtyService(req.body);
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