const TeaLeavesGrade = require('../models/TeaLeavesGrade');

//add new trough service

module.exports.addTeaLeavesGradeDetails = async (requestbody, requestUser) => {
    try {
        const cusID = requestbody.cusID;
        const date = requestbody.date;
        const totalTeaLeafQuantity = requestbody.totalTeaLeafQuantity;
        const bestLeafQuantity = requestbody.bestLeafQuantity;
        const belowBestLeafQuantity = requestbody.belowBestLeafQuantity;
        const poorLeafQuantity = requestbody.poorLeafQuantity;

        const newTeaLeavesGrade = await new TeaLeavesGrade({
            cusID,
            date,
            totalTeaLeafQuantity,
            bestLeafQuantity,
            belowBestLeafQuantity,
            poorLeafQuantity
        });

        const response = await newTeaLeavesGrade.save();
        console.log(response);
        return {
            msg: "Trough Added",
            data: response,
        };
    }
    catch (err) {
        console.log(err, "error");
        throw err;
    }
};

module.exports.viewTeaLeavesGradeDetails = async (req, res) => {
    try {
        let response = await TeaLeavesGrade.find();


        return {
            msg: "success",
            data: response,
        };

    }
    catch (err) {
        throw err;
    }
};

// module.exports.updateTroughDetails = async (req) => {
//     try{
//         let tid = req._id;
//         let idString = tid.toString();
//         const {
//             troughID,
//             capacity,
//             status,
//         } = req;

//         const updateTrough = {
//             troughID,
//             capacity,
//             status,
//         };
//         let response = await Trough.findByIdAndUpdate(
//             {_id : idString},
//             updateTrough,
//         );
//         if (response) {
//             return {
//                 msg: "success",
//                 data: response,
//             };
//         } else {
//             return {
//                 msg: "faild",
//                 data: response,
//             };
//         }
//     }
//     catch (err) {
//         throw err;
//     }
// };

// module.exports.deleteTroughService = async (req , res) => {
//     try{
//         let tid = req._id;
//         let idString = tid.toString();

//         let response = await Trough.findByIdAndDelete(idString);

//         if (response) {
// 			return {
// 				msg: "success",
// 				data: response,
// 			};
// 		} else {
// 			return {
// 				msg: "fail",
// 				data: null,
// 			};
// 		}
//     }
//     catch (err) {
//         throw err;
//     }
// };

// module.exports.singleViewTroughService = async(req) => {
//     try{
//         let tid = req._id;
//         let idString = tid.toString();

//         let response = await Trough.findOne({_id: idString});

//         if (response) {
// 			return {
// 				msg: "success",
// 				data: response,
// 			};
// 		} else {
// 			return {
// 				msg: "fail",
// 				data: null,
// 			};
// 		}
//     }
//     catch (err) {
//         throw err;
//     }
// };