const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const spaceSchema = new mongoose.Schema(
    {
        spaceName:{
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 25
        },
        description:{
            type: String,
            required: true,
            trim: true,
            min: 5,
            max: 100
        },
        role:{
            type: String,
            enum: ["user"],
            default: "user"
        },
        createdBy:{
            type: ObjectId,
            ref: "User",
            required: true
        },
        followers: [{
            type: ObjectId,
            ref:  "User"
        }],
        updatedAt: Date
    },
    {timeStamps: true}
);

module.exports = mongoose.model("Space", spaceSchema);