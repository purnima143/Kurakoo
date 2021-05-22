const asyncHandler = require("express-async-handler")
const User = require("../../models/user.model");
const Answer = require("../../models/answers.model");
const Question = require("../../models/questions.models");
const responseHandler = require("../../helpers/responseHandler");

const signup = async (req,res) => {
  User.findOne({ email: req.body.email})
  .exec((error, user) => {
      if(user) return res.status(400).json(responseHandler(fasle, 400, "Admin is already registered"));

      const {
          firstName, 
          lastName,
          email,
          password,
          confirmPassword
      } = req.body;
      if(password != confirmPassword){
        return res
            .status(400)
            .json(responseHandler( false, 400, "Password doesn't match", null ));
    }

      const _user = new User({
          firstName,
          lastName,
          email,
          password,
          username: Math.random().toString() ,
          role: 'admin'
      });

      _user.save((error, data) => {
          if (error){
              res.status(400).json(responseHandle(false, 400, "Admin is not created! Something went wrong!"));
          }

          if (data){
              res.status(201).json(responseHandler(true, 201, "Admn is created successfully", {data}))
          }
      });
  });
}

const signin = async(req, res) => {
  user.findOne({ email: req.body.email })
      .exe((error, user) => {
        if(error) return res.status(400).json(responseHandler(false, 400, "Something went wrong!"));

        if(user) {
          if(user.authenticate(req.body.password) && user.role === "admin"){
            const token = jwt.sign({ _id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '5h'});
            const { _id, firstName, lastName, email, role } = user;
            res.cookie( 'token' , token , {expiresIn : '5h'});
            res.status(200).json(responseHandler(true, 200, "Successfully Signin", user));
          } else {
            res.status(400).json(responseHandler(false, 400, "Invalid Cradentials", null));
          }
        }
      })
}
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


// @desc    Update user
// @route   PUT /api/user/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.firstName = req.body.firstName || user.firstName
    user.lastName = req.body.lastName || user.lastName
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    .json(responseHandler(false, 404, "User not found", null));
  }
}) 

module.exports = adminController = {
    signup,
    signin,
    getAnswers,
    getQuestions,
    getUsers,
    getQuestionById,
    getAnswerById,
    getUserById,
    deleteAnswer,
    deleteQuestion,
    deleteUser,
    updateUser
};
