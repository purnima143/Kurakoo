const Questions = require('../models/questions.models');
const responseHandler = require('../helpers/responseHandler');
const Answers = require('../models/answers.model')
const ObjectID = require('mongodb').ObjectID;

const createQuestions = async (req, res) => {
    const { questionText, questionLinks, tags } = req.body;
    
    const question = new Questions({
        questionText: questionText,
        questionLinks: questionLinks,
        tags: tags.split(" "),
        createdBy: req.user._id,
        views:0
    });
    try{
        await question.save()
        console.log('saved!')
        return res
            .status(200)
            .json(responseHandler(true, 200, question));
    }
    catch(e){
        console.log(e)
        return res
            .status(400)
            .json(responseHandler(false, 400, "Question not created ! Something went wrong!"));
    }
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
        const answers = await Answers.find({questionId: req.params.id}).sort("-upvotes")
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

const bookMarkques = async(req, res) => {
    try {
        const bool = req.body.bookmark === "true";
        const question = await Questions.findById(req.params.id);
        if (bool) {
          if (!question.bookmarkedBy.includes(req.user._id)) {
            question.bookmarkedBy.push(req.user._id);
            await question.save();
          }
          return res.status(200).json(responseHandler(true, 200,{ message: "bookmarked your question!" }));
        } else {
          const i = question.bookmarkedBy.indexOf(req.user._id);
          if (i < 0) {
            return res.status(200).json(responseHandler(true, 200,{ message: "question not found!" }));
          }
          question.bookmarkedBy.splice(i, 1);
          await question.save();
          return res.status(200).json(responseHandler(true, 200,{ message: "the question is not included in your bookmarked list anymore!" }));
        }
    } catch (e) {
        return res.status(400).json(responseHandler(false, 400,{ message: "something went wrong" }));
    }
};

const getQuestion = async(req, res) => {
    try{
        if(!ObjectID.isValid(req.params.id)){
            return res
            .status(400)
            .json(responseHandler(false, 400, "invalid question id"));
        }
        const question = await Questions.findById(req.params.id)
        
        if(!question){
            return res
            .status(400)
            .json(responseHandler(false, 400, "question does not exist!"));
        }
        if(question.createdBy.toString() !== req.user._id){ //increment count only when viewer is not the author of the question
            question.views+=1
            await question.save()
        }
        return res
            .status(200)
            .json(
                responseHandler(
                    true,
                    200,
                    "question found!",
                    {question}
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

module.exports = questionController = {
    createQuestions,
    getQuestions,
    editQuestion,
    deleteQuestion,
    getAnswers,
    searchQuestions,
    bookMarkques,
    getQuestion
};
