const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({

    questionText: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    updatedAt: Date,
}, { timeStamps: true });

module.exports = mongoose.model('Questions', questionsSchema);