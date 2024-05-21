const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerTLeavesDetailsSchema = new Schema(
    {
        date: {
            type: Date,
			required: true
        },
        cusID: {
            type: String,
			required: true,
        },
        totalQuantity: {
            type: Number,
            required: true
        },
        bestQty:{
            type: Number,
        },
        belowBestQty:{
            type: Number,
        },
        poorQty:{
            type: Number,
        },
    }
);

module.exports = mongoose.model(
    "CustomerTLeavesDetails",
    CustomerTLeavesDetailsSchema,
)