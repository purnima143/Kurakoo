const mongoose = require("mongoose");

const answersSchema = new mongoose.Schema(
    {
        questionId: {
            type: String,
            trim: true,
            required: true
        },
        answerText: {
            type: String,
            required: true,
            trim: true
        },
        tags: [{
            type: String,
            trim: true
        }],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
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
    { timeStamps: true }
);

module.exports = mongoose.model("Answers", answersSchema);
