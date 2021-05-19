const asyncHandler = require("express-async-handler")
const Answer = require("../models/answers.model");
const Question = require("../models/questions.models");


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


module.exports = userController = {
   getMyAnswers,
   getMyQuestions
};
