const express = require('express');

const {
    requireSignin,
    userMiddleWare
} = require("../common-middleware/common-middleware");

const commentController = require('../controllers/comments.controller');
const router = express.Router();

router.post('/postComment', requireSignin, userMiddleWare, commentController.postComment);
router.patch('/updateComment/:id', requireSignin, userMiddleWare, commentController.updateComment)
router.delete('/deleteComment/:id', requireSignin, userMiddleWare, commentController.deleteComment)

router.get('/getCommentById/:id', requireSignin, userMiddleWare, commentController.getCommentById);
router.get('/getMyComments', requireSignin, userMiddleWare, commentController.getMyComments);

router.get('/getCommentsForAnswer/:id', requireSignin, userMiddleWare, commentController.getCommentsForAnswer);

router.get('/upvoteComment/:id', requireSignin, userMiddleWare, commentController.upvoteComment)
router.get('/downvoteComment/:id', requireSignin, userMiddleWare, commentController.downvoteComment)


module.exports = router;
