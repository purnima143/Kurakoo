const Answers = require("../models/answers.model");
const responseHandler = require("../helpers/responseHandler");

const createAnswers = (req, res) => {
    const { answerText, questionId, tags } = req.body;

    const answer = new Answers({
        answerText: answerText,
        tags: tags,
        questionId: questionId,
        createdBy: req.user._id
    });

    answer.save((error, answer) => {
        if (error)
            return res
                .status(400)
                .json(
                    responseHandler(
                        false,
                        400,
                        "Please fill the required fields"
                    )
                );
        if (answer) {
            res.status(200).json(responseHandler(true, 200, answer));
        }
    });
};

module.exports = answerController = {
    createAnswers
};
