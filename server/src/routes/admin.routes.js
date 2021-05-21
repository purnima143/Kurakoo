const express = require("express");
const router = express.Router();
const adminController = require("..controllers/admin/admin.controller");
const { requireSignin } = require("../common-middleware/middleware");
const admin =require("../common-middleware/admin");

router.post('/admin/signup', validateSignupRequest, authController.signup);

router.get('/users', requireSignin, admin, adminController.getUsers);
router.get('/answers', requireSignin, admin, adminController.getAnswers);
router.get('/questions', requireSignin, admin, adminController.getQuestions);

router.get('/question/:id', requireSignin, admin, adminController.getQuestionById);
router.get('/user/:id', requireSignin, admin, adminController.getUserById);
router.get('/answer/:id', requireSignin, admin, adminController.getAnswerById);


router.delete('/question/:id', requireSignin, admin, adminController.deleteQuestion);
router.delete('/user/:id', requireSignin, admin, adminController.deleteUser);
router.delete('/answer/:id', requireSignin, admin, adminController.deleteAnswer);

router.put('/user/:id', requireSignin,admin,adminController.updateUser)

module.exports = router;