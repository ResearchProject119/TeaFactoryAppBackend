const Trough = require('../models/Trough');
const axios = require('axios');

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
        const {
            troughID,
            capacity,
            status,
        } = req;

        const updateTrough = {
            capacity,
            status,
        };
        let response = await Trough.findOneAndUpdate(
            {troughID : troughID},
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
        let tid = req.troughID;

        let response = await Trough.findOneAndDelete(tid);

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
        let tid = req.troughID;

        let response = await Trough.findOne({troughID: tid});

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

module.exports.predict = async (req) => {
    try {
        console.log(req)
        // Make the POST request to the prediction endpoint
        const response = await axios.post('https://tealeaves-prediction.onrender.com/timeserieswithexog', {
            date: req.date,
            rainfall: req.rainfall,
            holiday: req.holiday
        });
      
        console.log("data",response )
        // Check if the response is successful
        if (response.status === 200) {
            console.log("data",response.data.message);
            const responseArray = JSON.parse(response.data.message);
            
            // console.log(responseArray[4]);
            return {
                msg: "success",
                data: responseArray
            };
        } else {
            return {
                msg: "fail",
                data: null
            };
        }
    } catch (err) {
        // Handle any errors
        console.error('Error predicting:', err.message);
        throw err; // Rethrow the error to propagate it to the caller
    }
};