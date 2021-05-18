const asyncHandler = require("express-async-handler")
const User = require("../models/user.model");
const Answer = require("../models/answers.model");
const Question = require("../models/questions.models");
const responseHandler = require("../helpers/responseHandler");


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


// @desc    Get  answer by Id
// @route   GET /admin/user/:id
// @access  Private/Admin
const getAnswerById = asyncHandler(async (req, res) => {
  const answer = await Answer.findById(req.params.id)

  if(answer){
    res.json(answer)
  }else{
    res.status(404)
      .json(responseHandler(false, 404, "Answer not found", null));
  }
})

// @desc    Get  question by Id
// @route   GET /admin/question/:id
// @access  Private/Admin
const getQuestionById = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id)

  if(question){
    res.json(question)
  }else{
    res.status(404)
      .json(responseHandler(false, 404, "question not found", null));
  }
})


// @desc    Get  user by Id
// @route   GET /admin/user/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if(user){
    res.json(user)
  }else{
    res.status(404)
      .json(responseHandler(false, 404, "User not found", null));
  }
})

// @desc    Delete user
// @route   DELETE /admin/user/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
      .json(responseHandler(false, 404, "User not found", null));
  }
})


// @desc    Delete answer
// @route   DELETE /admin/answer/:id
// @access  Private/Admin
const deleteAnswer = asyncHandler(async (req, res) => {
  const answer = await Answer.findById(req.params.id)

  if (answer) {
    await answer.remove()
    res.json({ message: 'Answer removed' })
  } else {
    res.status(404)
      .json(responseHandler(false, 404, "Answer not found", null));
  }
})


// @desc    Delete question
// @route   DELETE /admin/question/:id
// @access  Private/Admin
const deleteQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id)

  if (question) {
    await question.remove()
    res.json({ message: 'Question removed' })
  } else {
    res.status(404)
      .json(responseHandler(false, 404, "Question not found", null));
  }
})


module.exports = adminController = {
    getAnswers,
    getQuestions,
    getUsers,
    getQuestionById,
    getAnswerById,
    getUserById,
    deleteAnswer,
    deleteQuestion,
    deleteUser
};
