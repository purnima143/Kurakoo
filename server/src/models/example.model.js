const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
