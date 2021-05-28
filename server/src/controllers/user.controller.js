const asyncHandler = require("express-async-handler")
const Answer = require("../models/answers.model");
const Question = require("../models/questions.models");
const User = require("../models/user.model.js");
const responseHandler = require("../helpers/responseHandler")


// @desc    Get logged in user's questions
// @route   GET /user/myquestions
// @access  Private
const getMyQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({ user: req.user._id })
    res.json(orders)
})

// @desc    Get logged in user's answers
// @route   GET /user/myanswers
// @access  Private
const getMyAnswers = asyncHandler(async (req, res) => {
    const answers = await Answer.find({ user: req.user._id })
    res.json(orders)
})

const following = async( req, res) => {
    try{
        if( req.user._id === req.params.user_id){
            return res.status(405).json(responseHandler( false, 405, "Sorry, Bi-mistake you requested to follow yourself", null))
        } 
        else{
            const user = await User.findById( req.user._id );
            if( user.following.includes(req.params.user_id)){
                return res.status(405).json(responseHandler( false, 405, "Already following", null))
            } 
            else{
            User.findByIdAndUpdate( req.params.user_id , {
                $push: {followers: req.user._id}
            },{
                new: true
            }, (err, result) => {
                if(err){
                    return res.status(400).json({error: err})
                }
            User.findByIdAndUpdate( req.user._id,{
                $push: {following: req.params.user_id}
            }, {
                new: true
            }).then(result => {
                res.status(200).json(responseHandler(true, 200, "You start following", result));
            })
        }) } }
          
    } catch (e) {
        return res.status(400).json(responseHandler( false, 400, "Something went wrong", null ));
    }

}

module.exports = userController = {
   getMyAnswers,
   getMyQuestions,
   following
};
