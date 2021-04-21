const Answers = require("../models/answers.model");
const responseHandler = require("../helpers/responseHandler");
const Question = require("../models/questions.models")
const ObjectID = require('mongodb').ObjectID;

const createAnswers = async (req, res) => {
    const { answerText, questionId, tags } = req.body;
    
    if(ObjectID.isValid(questionId)){  //checking if the string entered is a valid ObjectId
        try{
            const isValidQuestion = await Question.findById(questionId)  //if valid ObjectId, checking if a question with this id exists
            if(isValidQuestion){
                const duplicate = await Answers.findOne({createdBy: req.user._id, questionId: questionId}) //after 2 checks checking if there is already an answer created by the user for the same question
                if(!duplicate){
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
                            return res.status(200).json(responseHandler(true, 200, answer));
                        }
                    });
                }
                else{
                    return res.status(400).json(responseHandler(true, 400, {message: "you have already answered that question! wish to edit that?"}));
                }
            }
            else{
                return res.status(400).json(responseHandler(true, 400, {message: "invalid questionId!"}));
            }
        }
        catch(e){
            return res.status(400).json(responseHandler(true, 400, {message: "something went wrong!"}));
        }    
    }
    else{
        return res.status(400).json(responseHandler(true, 400, {message: "invalid questionId!"}));
    }     
    
};

const deleteAnswer = async(req, res) => {
    try{

        const answer = await Answers.findOneAndDelete({_id: req.params.id, createdBy: req.user._id})
        if(!answer){  
            return res.status(404).send({message:"cannot delete!"})
        }
        res.status(200).send({message: "deleted!"}) 
    }catch(e){
        res.status(500).send()  
    }
}

module.exports = answerController = {
    createAnswers,
    deleteAnswer
};
