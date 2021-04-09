const Questions = require('../models/questions.models');
const responseHandler = require('../helpers/responseHandler');

const createQuestions = (req, res) => {

    const {
        questionText, tags, createdBy
    } = req.body;


const question = new Questions({
    questionText: questionText,
    tags: tags,
    createdBy: req.user._id
});

question.save(((error, question) => {
    if(error) return res.status(400).json(responseHandler(false, 400, "Something went wrong!"));
    if(question){
        res.status(200).json(responseHandler(true, 200, question));
    }
}));
}

module.exports = questionController = {
    createQuestions
}