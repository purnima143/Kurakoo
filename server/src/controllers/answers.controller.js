const Answers = require("../models/answers.model");
const responseHandler = require("../helpers/responseHandler");
const Question = require("../models/questions.models")
const ObjectID = require('mongodb').ObjectID;
const User = require('../models/user.model')

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
                        tags: tags.split(" "),
                        questionId: questionId,
                        createdBy: req.user._id,
                        upvotes:0,
                        downvotes:0,
                        views:0
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

const upvoteAnswer = async(req, res) => {
    try{
        const ans = await Answers.findById(req.params.id)
        console.log(ans)
        if(!ans){
            return res.status(400).send({message: "invalid id!"})
        }
        else{
            const user = await User.findById(req.user._id)
            console.log(user)
            const isUpvoted = user.upvotedAns.includes(ans._id)
            const isDownvoted = user.downvotedAns.includes(ans._id)
            console.log(user.upvotedAns.includes(ans._id))
            console.log(isDownvoted)
            if(isUpvoted){
                console.log('already')
                return res.status(200).send({message: "already upvoted!"})
                
            }
            if(!isUpvoted){
                if(isDownvoted){
                    ans.downvotes = ans.downvotes - 1
                    const index = user.downvotedAns.indexOf(ans._id);
                    if (index > -1) {
                        user.downvotedAns.splice(index, 1);
                    }    
                }
                ans.upvotes = ans.upvotes + 1
                await ans.save()
                user.upvotedAns.push(ans._id)
                await user.save()
                return res.status(200).send({message: "upvoted!"})
            }
        }
    }
    catch(e){
        console.log(e)
        return res.status(400).send({message: "something went wrong!"})
    }
}

const downvoteAnswer = async(req, res) => {
    try{
        const ans = await Answers.findById(req.params.id)
        if(!ans){
            return res.send(400).send({message: "invalid id!"})
        }
        else{
            const user = await User.findById(req.user._id)
            const isUpvoted = user.upvotedAns.includes(ans._id)
            const isDownvoted = user.downvotedAns.includes(ans._id)
            if(isDownvoted){
                return res.status(200).send({message: "already downvoted!"})
            }
            if(!isDownvoted){
                if(isUpvoted){
                    ans.upvotes = ans.upvotes - 1
                    const index = user.upvotedAns.indexOf(ans._id);
                    if (index > -1) {
                        user.upvotedAns.splice(index, 1);
                    }    
                }
                ans.downvotes = ans.downvotes + 1
                await ans.save()
                user.downvotedAns.push(ans._id)
                await user.save()
                return res.status(200).send({message: "downvoted!"})
            }
        }
    }
    catch(e){
        res.status(400).send({message: "something went wrong!"})
    }
}


const getUpvotedAnswers = async (req, res) => {
    try{
        const user = await User.findById(req.user._id)
        let upvotedAnswers = user.upvotedAns
        for (i = 0; i < upvotedAnswers.length; i++) {
            try{
                upvotedAnswers[i] = await Answers.findById(upvotedAnswers[i])
            }
            catch(e){
                console.log(e)
            }
        } 
        if(!upvotedAnswers){
            return res.status(200).json(responseHandler(true, 200, {message: "upvoted answers not found"})); 
        }
        return res.status(200).json(responseHandler(true, 200, upvotedAnswers));
    }
    catch(e){
        return res.status(400).json(responseHandler(false, 400, {message: "something went wrong!"}));
    }
}
      
const searchAnswers = async(req, res) => {
    const match = {}
    if(req.query.createdBy){
        match.createdBy = req.query.createdBy
    }
    if(req.query.questionId){
        match.questionId = req.query.questionId
    }
    if(req.query.tags){
        match.tags = { $in: req.query.tags }
    }
    const answers = await Answers.find(match)
    try{
        if(answers.length===0){
            return res.status(200).json(responseHandler(true, 200, {message: "no answers found"})); 
        }
        return res.status(200).json(responseHandler(true, 200, answers)); 
    }
    catch(e){
        return res.status(400).json(responseHandler(false, 400, {message: "something went wrong"}));
    }
}

const getAnswer = async(req, res) => {
    try{
        if(!ObjectID.isValid(req.params.id)){
            return res
            .status(400)
            .json(responseHandler(false, 400, "invalid answer id"));
        }
        const answer = await Answers.findById(req.params.id)
        
        if(!answer){
            return res
            .status(400)
            .json(responseHandler(false, 400, "answer does not exist!"));
        }
        if(answer.createdBy.toString() !== req.user._id){ //increment count only when viewer is not the author of the answer
            answer.views+=1
            await answer.save()
        }
        return res
            .status(200)
            .json(
                responseHandler(
                    true,
                    200,
                    "answer found!",
                    {answer}
                )
            );
    }
    catch(e){
        console.log(e)
        return res
            .status(400)
            .json(responseHandler(false, 400, "something went wrong!"));
    }
}

const getAnswerStats = async(req, res) => {
    try{
        if(!ObjectID.isValid(req.params.id)){
            return res
            .status(400)
            .json(responseHandler(false, 400, "invalid answer id"));
        }
        const answer = await Answers.findById(req.params.id)
        const statistics = {"views": answer.views, "upvotes": answer.upvotes, "downvotes": answer.downvotes}
        if(!answer){
            return res
            .status(400)
            .json(responseHandler(false, 400, "answer does not exist!"));
        }
        return res
            .status(200)
            .json(
                responseHandler(
                    true,
                    200,
                    "answer statistics!",
                    statistics
                )
            );
        
    }
    catch(e){
        console.log(e)
        return res
            .status(400)
            .json(responseHandler(false, 400, "something went wrong!"));
    }
}

module.exports = answerController = {
    createAnswers,
    deleteAnswer,
    editAnswer,
    upvoteAnswer,
    downvoteAnswer,
    getUpvotedAnswers,
    searchAnswers,
    getAnswer,
    getAnswerStats
};
