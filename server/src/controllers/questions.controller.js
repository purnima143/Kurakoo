const Questions = require('../models/questions.models');
const responseHandler = require('../helpers/responseHandler');
const Answers = require('../models/answers.model')

const createQuestions = (req, res) => {
    const { questionText, questionLinks, tags } = req.body;
    
    const question = new Questions({
        questionText: questionText,
        questionLinks: questionLinks,
        tags: tags,
        createdBy: req.user._id
    });

    question.save((error, question) => {
        if (error)
            return res
                .status(400)
                .json(responseHandler(false, 400, "Question not created ! Something went wrong!"));
        if (question) {
            res.json(responseHandler(true, 200, question));
        }
    });
};

const getQuestions = async(req, res) => {
    questions = await Questions.find({id: req._id})
                    .populate("createdBy", "_id firstName lastName")
                    .sort("-createdAt")
    try{
        res.status(200).send({questions})
    }
    catch(e){
        res.status(404).send("something went wrong!")
    }
}

const editQuestion = async(req, res) =>{
    try{
        const question = await Questions.findOne({_id: req.params.id, createdBy: req.user._id})
        const edits = Object.keys(req.body)
        const permittededits = ['questionText','tags'] //allowing a user to update only these fields
        const isValid = edits.every((edit)=>{
            return permittededits.includes(edit)
        })
        if(!isValid){
            res.status(400).send({error: 'Invalid edits!'})
        }
        try{    
            
            edits.forEach(edit => {
                question[edit] = req.body[edit]
            })
            
            await question.save()
            return res.status(200).json({question})
    
        }
        catch(e){
            res.status(400).send({error: "something went wrong!"})
        }
    }
    catch(e){
        res.status(400).send({error: "something went wrong!"})
    }
}

const deleteQuestion = async(req, res) => {
    try{
        const question = await Questions.findOneAndDelete({_id: req.params.id, createdBy: req.user._id})
        if(!question){  
            return res.status(400).send({message:"question not found"})
        }
        await Answers.deleteMany({questionId: req.params.id})
        res.status(200).send({message: "question deleted!"}) 
    }catch(e){
        res.status(400).send({message:"something went wrong!"})  
    }
}

const getAnswers = async (req, res) => {
    try{
        const answers = await Answers.find({questionId: req.params.id})
        if(!answers){
            return res.status(200).json(responseHandler(true, 200, {message: "answers not found"})); 
        }
        return res.status(200).json(responseHandler(true, 200, answers));
    }
    catch(e){
        return res.status(400).json(responseHandler(false, 400, {message: "something went wrong"}));
    }
}

const searchQuestions = async(req, res) => {
    const match ={createdBy: req.user._id}

    if(req.query.id){
        match._id = req.query.id
    }
    if(req.query.questionText){
        match.questionText = req.query.questionText
    }
    if(req.query.tags){
        match.tags = req.query.tags
    }

    const questions = await Questions.find(match)

    try{
        if(questions.length===0){
            return res.status(200).json(responseHandler(true, 200, {message: "no questions found"})); 
        }
        res.status(200).send(questions)
    }
    catch(e){
        return res.status(400).json(responseHandler(false, 400, {message: "something went wrong"}));
    }
}

module.exports = questionController = {
    createQuestions,
    getQuestions,
    editQuestion,
    deleteQuestion,
    getAnswers,
    searchQuestions
};
