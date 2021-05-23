const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/admin/admin.controller");
const { validateSignupRequest, validateSigninRequest } = require("../../validators/auth.validator");
const { requireSignin } = require("../../common-middleware/common-middleware");
const { adminMiddleWare } =require("../../common-middleware/common-middleware");

router.post('/admin/signup', validateSignupRequest, authController.signup);

//router.post('/admin/signin', validateSigninRequest, authController.signin);

router.post('/admin/signin', validateSigninRequest, authController.signin);
router.post('/admin/signout', requireSignin, authController.signout);


router.get('/users', requireSignin, adminMiddleWare, adminController.getUsers);
router.get('/answers', requireSignin, adminMiddleWare, adminController.getAnswers);
router.get('/questions', requireSignin, adminMiddleWare, adminController.getQuestions);

router.get('/question/:id', requireSignin, adminMiddleWare, adminController.getQuestionById);
router.get('/user/:id', requireSignin, adminMiddleWare, adminController.getUserById);
router.get('/answer/:id', requireSignin, adminMiddleWare, adminController.getAnswerById);


router.delete('/question/:id', requireSignin, adminMiddleWare, adminController.deleteQuestion);
router.delete('/user/:id', requireSignin, adminMiddleWare, adminController.deleteUser);
router.delete('/answer/:id', requireSignin, adminMiddleWare, adminController.deleteAnswer);

router.put('/user/:id', requireSignin,adminMiddleWare,adminController.updateUser)

module.exports = router;