const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller")
const { requireSignin } = require("../common-middleware/middleware");
const admin =require("../common-middleware/admin")


router.get('/users', requireSignin, admin, adminController.getUsers);
router.get('/answers', requireSignin, admin, adminController.getAnswers);
router.get('/questions', requireSignin, admin, adminController.getQuestions);


module.exports = router;