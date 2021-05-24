const express = require("express");
const router = express.Router();
const { requireSignin } = require("../common-middleware/common-middleware");
const userController = require("../controllers/user.controller")

router.get('/myquestions', requireSignin,userController.getMyQuestions);
router.get('/myanswers', requireSignin, userController.getMyAnswers);



module.exports = router;