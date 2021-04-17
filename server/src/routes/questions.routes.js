const express = require("express");
const {
    requireSignin,
    userMiddleWare
} = require("../common-middleware/middleware");
const questionController = require("../controllers/questions.controller");
const router = express.Router();

router.post(
    "/question",
    requireSignin,
    userMiddleWare,
    questionController.createQuestions
);

router.get("/allQuestions",  requireSignin, userMiddleWare, questionController.getQuestions)
module.exports = router;
