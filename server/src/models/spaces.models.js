const mongoose = require("mongoose");

const spaceSchema = new mongoose.Schema(
    {
        spaceName:{
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 10
        },
        description:{
            type: String,
            required: true,
            trim: true,
            min: 5,
            max: 50
        },
        role:{
            type: String,
            enum: ["user"],
            default: "user"
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        updatedAt: Date
    },
    {timeStamps: true}
);

module.exports = mongoose.model("Space", spaceSchema);