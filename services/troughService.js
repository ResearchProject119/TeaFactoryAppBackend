const Trough = require('../models/Trough');

//add new trough service

module.exports.addtroughDetails = async(requestbody, requestUser) => {
    try{
        const troughID = requestbody.troughID;
        const capacity = requestbody.capacity;
        const status = requestbody.status;

        const newTrough = await new Trough({
            troughID,
            capacity,
            status,
        });

        const response = await newTrough.save();
        console.log(response);
        return {
            msg: "Trough Added",
            data: response,
        };
    }
    catch(err){
        console.log(err, "error");
        throw err;
    }
};

module.exports.viewAllTroughs = async (req, res) => {
    try{
        let response = await Trough.find();

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

module.exports.updateTroughDetails = async (req) => {
    try{
        let tid = req._id;
        let idString = tid.toString();
        const {
            troughID,
            capacity,
            status,
        } = req;

        const updateTrough = {
            troughID,
            capacity,
            status,
        };
        let response = await Trough.findByIdAndUpdate(
            {_id : idString},
            updateTrough,
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

module.exports.deleteTroughService = async (req , res) => {
    try{
        let tid = req._id;
        let idString = tid.toString();

        let response = await Trough.findByIdAndDelete(idString);

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

module.exports.singleViewTroughService = async(req) => {
    try{
        let tid = req._id;
        let idString = tid.toString();

        let response = await Trough.findOne({_id: idString});

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