const express = require("express");
const {
    requireSignin,
    userMiddleWare,
} = require("../common-middleware/common-middleware");
const questionController = require("../controllers/questions.controller");
const router = express.Router();

router.post(
    "/question",
    requireSignin,
    userMiddleWare,
    questionController.createQuestions
);

router.post(
    "/bookmarkQues",
    requireSignin,
    userMiddleWare,
    questionController.bookMarkques
);

router.post(
    "/allBookmarkQues", 
    requireSignin, 
    userMiddleWare, 
    questionController.allBookmarkQues
);

router.get( 
            "/allQuestions",  
            requireSignin, 
            userMiddleWare, 
            questionController.getQuestions
        )
router.patch(
    "/question/:id",
    requireSignin,
    userMiddleWare,
    questionController.editQuestion
)

router.delete("/deleteQuestion/:id",  requireSignin, userMiddleWare, questionController.deleteQuestion)
router.get('/getAnswers/:id', requireSignin, userMiddleWare, questionController.getAnswers)
router.get('/searchQuestions', requireSignin, userMiddleWare, questionController.searchQuestions)
router.get('/getQuestion/:id', requireSignin, userMiddleWare, questionController.getQuestion)

router.get('/upvoteQuestion/:id', requireSignin, userMiddleWare, questionController.upvoteQuestion)
router.get('/downvoteQuestion/:id', requireSignin, userMiddleWare, questionController.downvoteQuestion)

module.exports = router;
