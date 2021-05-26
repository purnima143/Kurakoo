const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {   
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        answerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Answer",
            required: true
        },
        text: {
            type: String,
            required: true
        },
        upvotes: {
            type: Number
        },
        downvotes: {
            type: Number
        },
        updatedAt: Date
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model("Comment", commentSchema);

