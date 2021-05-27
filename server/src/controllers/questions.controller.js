const Questions = require('../models/questions.models');
const responseHandler = require('../helpers/responseHandler');
const Answers = require('../models/answers.model')
const ObjectID = require('mongodb').ObjectID;
const User = require('../models/user.model')

const createQuestions = async (req, res) => {
    const { questionText, questionLinks, tags } = req.body;
    
    const question = new Questions({
        questionText: questionText,
        questionLinks: questionLinks,
        tags: tags.split(" "),
        createdBy: req.user._id,
        views:0,
        upvotes:0,
        downvotes:0
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
          return res.status(200).json(responseHandler(true, 200, "bookmarked your question!", question ));
        } else {
          const i = question.bookmarkedBy.indexOf(req.user._id);
          if (i < 0) {
            return res.status(200).json(responseHandler(true, 200, "question not found!" ));
          }
          question.bookmarkedBy.splice(i, 1);
          await question.save();
          return res.status(200).json(responseHandler(true, 200, "the question is not included in your bookmarked list anymore!" ));
        }
    } catch (e) {
        return res.status(400).json(responseHandler(false, 400, "something went wrong" ));
    }
};

const allBookmarkQues = async ( req, res ) => {
    try {
        const questions = await Questions.find({ bookmarkedBy: req.user._id });
        const questions_list = [];

        questions.forEach((question) => {
            const {
                _id,
                questionText,
                questionLinks,
                tags,
                createdBy
            } = question;

            const obj = {
                _id,
                questionText,
                questionLinks,
                tags,
                createdBy
            };

            questions_list.push(obj);
        });
        return res.status(200).json(responseHandler(true, 200, "Your list", questions_list));
    } catch (e) {
        res.status(400).json(responseHandler(false, 400, "Something Went Wrong!"))
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

const upvoteQuestion = async(req, res) => {
    try{
        const question = await Questions.findById(req.params.id)
        console.log(question)
        if(!question){
            return res.send(400).send({message: "invalid id!"})
        }
        else{
            const user = await User.findOne({_id:req.user._id})
            const isUpvoted = user.upvotedQs.includes(question._id)
            const isDownvoted = user.downvotedQs.includes(question._id)
            console.log(user.upvotedQs.includes(question._id))
            console.log(isDownvoted)
            if(isUpvoted){
                console.log('already')
                return res.status(200).send({message: "already upvoted!"})

            }
            if(!isUpvoted){
                if(isDownvoted){
                    question.downvotes = question.downvotes - 1
                    const index = user.downvotedQs.indexOf(question._id);
                    if (index > -1) {
                        user.downvotedQs.splice(index, 1);
                    }    
                }
                question.upvotes = question.upvotes + 1
                await question.save()
                user.upvotedQs.push(question._id)
                await user.save()
                return res.status(200).send({message: "question upvoted!"})
            }
        }
    }
    catch(e){
        console.log(e)
        return res.status(400).send({message: "something went wrong!"})
    }
}

const downvoteQuestion = async(req, res) => {
    try{
        const question = await Questions.findById(req.params.id)
        if(!question){
            return res.send(400).send({message: "invalid id!"})
        }
        else{
            const user = await User.findById(req.user._id)
            const isUpvoted = user.upvotedQs.includes(question._id)
            const isDownvoted = user.downvotedQs.includes(question._id)
            if(isDownvoted){
                return res.status(200).send({message: "already downvoted!"})
            }
            if(!isDownvoted){
                if(isUpvoted){
                    question.upvotes = question.upvotes - 1
                    const index = user.upvotedQs.indexOf(question._id);
                    if (index > -1) {
                        user.upvotedQs.splice(index, 1);
                    }    
                }
                question.downvotes = question.downvotes + 1
                await question.save()
                user.downvotedQs.push(question._id)
                await user.save()
                return res.status(200).send({message: "downvoted!"})
            }
        }
    }
    catch(e){
        console.log(e)
        res.status(400).send({message: "something went wrong!"})
    }
}


const getUpvotedQuestions = async(req, res) => {
    try{
        const user = await User.findById(req.user._id)
        let upvotedQuestions = user.upvotedQs
        for (i = 0; i < upvotedQuestions.length; i++) {
            try{
                upvotedQuestions[i] = await Questions.findById(upvotedQuestions[i])
            }
            catch(e){
                console.log(e) 
            }
        } 
        if(!upvotedQuestions || upvotedQuestions.length===0){
            return res.status(200).json(responseHandler(true, 200, {message: "you haven't upvoted any question!"})); 
        }
        return res.status(200).json(responseHandler(true, 200, upvotedQuestions));
    }
    catch(e){
        return res.status(400).json(responseHandler(false, 400, {message: "something went wrong!"}));
    }
}

const getUpvotedQuestion = async(req, res) => {
    try{
        if(!ObjectID.isValid(req.params.id)){
            return res
            .status(400)
            .json(responseHandler(false, 400, "invalid question id"));
        }
        const user = await User.findById(req.user._id)
        const upvotedQuestions = user.upvotedQs
        let flag = 0
        for (i = 0; i < upvotedQuestions.length; i++) {
                if(upvotedQuestions[i].toString()===req.params.id){
                    const upvotedQuestion = await Questions.findById(upvotedQuestions[i])
                    flag = 1
                    return res.status(200).json(responseHandler(true, 200, upvotedQuestion));
                }
        } 
        
        if(flag===0){

            return res.status(400).json(responseHandler(true, 400, {message: "no upvoted question with entered id exists!"})); 
        }
        
    }
    catch(e){
        console.log(e)
        return res.status(400).json(responseHandler(false, 400, {message: "something went wrong!"}));
    }
}

const getQuestionStats = async(req, res) => {
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
      const answers = await Answers.find({questionId: req.params.id})
      let answerCount = 0
      if(!answers || answers.length===0){
          answerCount = 0
      }
      else{
          answerCount = answers.length
      }
      const statistics = {"views": question.views, "upvotes": question.upvotes, "downvotes": question.downvotes, "answerCount": answerCount}

      return res
          .status(200)
          .json(
              responseHandler(
                  true,
                  200,
                  "question statistics!",
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


module.exports = questionController = {
    createQuestions,
    getQuestions,
    editQuestion,
    deleteQuestion,
    getAnswers,
    searchQuestions,
    bookMarkques,
    allBookmarkQues,
    getQuestion,
    upvoteQuestion,
    downvoteQuestion,
    getQuestionStats,
    getUpvotedQuestions,
    getUpvotedQuestion
};
