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

const editAnswer = async(req, res) =>{
    try{
        const answer = await Answers.findOne({_id: req.params.id, createdBy: req.user._id})
        const edits = Object.keys(req.body)
        const permittededits = ['tags', 'answerText'] //allowing a user to update only these fields
        const isValid = edits.every((edit)=>{
            return permittededits.includes(edit)
        })
        if(!isValid){
            res.status(400).send({error: 'Invalid edits!'})
        }
        try{    
            edits.forEach(edit => {
                answer[edit] = req.body[edit]
            })
            
            await answer.save()
            return res.status(200).json({message: "answer updated!"})
    
        }
        catch(e){
            res.status(400).send({message: "something went wrong!"})
        }
    }
    catch(e){
        res.status(400).send({message: "something went wrong!"})
    }
}

module.exports = answerController = {
    createAnswers,
    deleteAnswer,
    editAnswer
};
