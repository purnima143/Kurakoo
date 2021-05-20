const Comment = require("../models/comments.model");
const responseHandler = require("../helpers/responseHandler");
const User = require("../models/user.model")
const Answer = require("../models/answers.model")
const ObjectID = require('mongodb').ObjectID;


const postComment = async(req, res) => {
    try 
    {
        const {answerId, text} = req.body
        const user = await User.findById(req.user._id)
        if(!answerId || !text || !ObjectID.isValid(answerId)){
            return res
            .status(200)
            .json(
                responseHandler(
                    true,
                    200,
                    "please enter all the fields correctly!",
                )
            );
        }
        const ans = await Answer.findById(answerId)
        if(ans)
        {
            const comment = new Comment({
                answerId,
                text,
                createdBy: req.user._id,
                updatedAt: new Date().toISOString()
            })
            await comment.save()
            return res
                .status(200)
                .json(
                    responseHandler(
                        true,
                        200,
                        "comment saved!",
                        {answerId, text, updatedAt:new Date().toISOString(), created_by: user.firstName + user.lastName}
                    )
                );
        }
        else{
            return res
                .status(200)
                .json(
                    responseHandler(
                        true,
                        200,
                        "invalid answerID!"
                    )
                );
        }
    } 
    catch (e) {
        console.log(e);
        return res
            .status(400)
            .json(responseHandler(false, 400, "something went wrong!"));
    }
};

module.exports = commentController = {
    postComment
};