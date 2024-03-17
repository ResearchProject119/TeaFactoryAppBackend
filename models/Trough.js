const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TroughManagementSchema = new Schema(
    {
        troughID: {
            type: String,
			required: true,
        },
        capacity: {
            type: String,
            required: true,
            enum: ['Large', 'Medium', 'Small'] 
        },
        status:{
            type: String,
            required: true,
            enum: ['Active', 'Inactive', 'Removed']
        }
    }
);

module.exports = mongoose.model(
    "TroughManagement",
    TroughManagementSchema,
)