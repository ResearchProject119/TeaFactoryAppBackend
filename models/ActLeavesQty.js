const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActLeavesQtySchema = new Schema(
    {
        date: {
            type: Date,
			required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        rainfall:{
            type: Number,
            required: true
        },
        holiday:{
			type: Boolean,
			default: false,
        }
    }
);

module.exports = mongoose.model(
    "ActLeavesQty",
    ActLeavesQtySchema,
)