const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const studentNotificationSchema = new Schema({
    notificationFor:{
        type: ObjectId,
        ref: "User",
        required: true
    },
    notificationBy:{
        type: ObjectId,
        ref: "User",
        required: true
    },
    notificationTitle: {
        type: String,
        required: true
    },
    upvoteAnswerNotification: {
        type: ObjectId,
        ref: "Answer",
    },
    upvoteQuestionNotification: {
        type: ObjectId,
        ref: "Question",
    },
    upvoteCommentNotification: {
        type: ObjectId,
        ref: "Comment",
    },
    answerNotification: {
        answerId: {
            type: ObjectId,
            ref: "Answer"
        },
        questionId: {
            type: ObjectId,
            ref: "Question"
        }
    },
    commentNotification:{
        commentId: {
            type: ObjectId,
            ref: "Comment"
        },
        answerId: {
            type: ObjectId,
            ref: "Answer"
        }
    },
    followNotification: {
        type: ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ['read', 'unread'],
        required: true
    },
    
}, {timestamps: true})

const StudentNotification = mongoose.model('StudentNotification', studentNotificationSchema);

module.exports = StudentNotification;


