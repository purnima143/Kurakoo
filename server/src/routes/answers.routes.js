const express = require("express");
const {
    requireSignin,
    userMiddleWare
} = require("../common-middleware/common-middleware");
const answerController = require("../controllers/answers.controller");
const router = express.Router();

router.post(
    "/question/answer",
    requireSignin,
    userMiddleWare,
    answerController.createAnswers
);
router.delete('/deleteAnswer/:id', requireSignin, userMiddleWare, answerController.deleteAnswer)
router.patch('/editAnswer/:id', requireSignin, userMiddleWare, answerController.editAnswer)
router.get('/upvote/:id', requireSignin, userMiddleWare, answerController.upvoteAnswer)
router.get('/downvote/:id', requireSignin, userMiddleWare, answerController.downvoteAnswer)
router.get('/getUpvotedAnswers', requireSignin, userMiddleWare, answerController.getUpvotedAnswers)
router.get('/searchAnswers', requireSignin, userMiddleWare, answerController.searchAnswers)
router.get('/getAnswer/:id', requireSignin, userMiddleWare, answerController.getAnswer)

router.get('/getAnswerStats/:id', requireSignin, userMiddleWare, answerController.getAnswerStats)

router.get('/getUpvotedAnswer/:id', requireSignin, userMiddleWare, answerController.getUpvotedAnswer)

module.exports = router;
