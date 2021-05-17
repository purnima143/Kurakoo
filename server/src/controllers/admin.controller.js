const asyncHandler = require("express-async-handler")
const User = require("../models/user.model");
const Answer = require("../models/answers.model");
const Question = require("../models/questions.models");


// @desc    Get all users
// @route   GET /admin/users
// @access  Private/Admin
 const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
  }); 

  
// @desc    Get all users
// @route   GET /admin/answers
// @access  Private/Admin
const getAnswers = asyncHandler(async (req, res) => {
    const answers = await Answer.find({})
    res.json(answers)
  }) 

  
// @desc    Get all users
// @route   GET /admin/questions
// @access  Private/Admin
const getQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({})
    res.json(questions)
  }) 


module.exports = adminController = {
    getAnswers,
    getQuestions,
    getUsers
};
