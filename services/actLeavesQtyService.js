const ActLeavesQty = require('../models/ActLeavesQty');

//add new ActLeavesQty service

module.exports.addActLeavesQtyService = async(requestbody, requestUser) => {
    try{
        const date = requestbody.date;
        const quantity = requestbody.quantity;
        const rainfall = requestbody.rainfall;
        const holiday = requestbody.holiday;

        const newActLeavesQty = await new ActLeavesQty({
            date,
            quantity,
            rainfall,
            holiday,
        });

        const response = await newActLeavesQty.save();
        console.log(response);
        return {
            msg: "Actual Leaves Quantity Added",
            data: response,
        };
    }
    catch(err){
        console.log(err, "error");
        throw err;
    }
};

module.exports.viewActLeavesQtyService = async (req, res) => {
    try{
        let response = await ActLeavesQty.find();

        if (response) {
            return {
                msg: "success",
                data: response,
            };
        } else {
            return {
                msg: "faild",
                data: response,
            };
        }
    }
    catch (err) {
        throw err;
    }
};

module.exports.updateActLeavesQtyService = async (req) => {
    try{
        const {
            date,
            quantity,
            rainfall,
            holiday,
        } = req;

        const updateActLeavesQty = {
            quantity,
            rainfall,
            holiday,
        };
        let response = await ActLeavesQty.findOneAndUpdate(
            {date : date},
            updateActLeavesQty,
        );
        if (response) {
            return {
                msg: "success",
                data: response,
            };
        } else {
            return {
                msg: "faild",
                data: response,
            };
        }
    }
    catch (err) {
        throw err;
    }
};

module.exports.deleteActLeavesQtyService = async (req , res) => {
    try{
        let leDate = req.date;

        let response = await ActLeavesQty.findOneAndDelete(leDate);

        if (response) {
			return {
				msg: "success",
				data: response,
			};
		} else {
			return {
				msg: "fail",
				data: null,
			};
		}
    }
    catch (err) {
        throw err;
    }
};

module.exports.singleViewActLeavesQtyService = async(req) => {
    try{
        let leDate = req.date;

        let response = await ActLeavesQty.findOne({date: leDate});

        if (response) {
			return {
				msg: "success",
				data: response,
			};
		} else {
			return {
				msg: "fail",
				data: null,
			};
		}
    }
    catch (err) {
        throw err;
    }
};