const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeaLeavesGradeManagementSchema = new Schema(
    {
        cusID: {
            type: String,
        },
        date: {
            type: String,
        },
        totalTeaLeafQuantity: {
            type: String,
        },
        bestLeafQuantity: {
            type: String,
        },
        belowBestLeafQuantity: {
            type: String,
        },
        poorLeafQuantity: {
            type: String,
        },
    }
);

module.exports = mongoose.model(
    "TeaLeavesGradeManagement",
    TeaLeavesGradeManagementSchema,
)