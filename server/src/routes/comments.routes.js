const express = require('express');

const {
    requireSignin,
    userMiddleWare
} = require("../common-middleware/middleware");

const commentController = require('../controllers/comments.controller');
const router = express.Router();

router.post('/postComment', requireSignin, userMiddleWare, commentController.postComment);
router.patch('/updateComment/:id', requireSignin, userMiddleWare, commentController.updateComment)
router.delete('/deleteComment/:id', requireSignin, userMiddleWare, commentController.deleteComment)

router.get('/getCommentById/:id', requireSignin, userMiddleWare, commentController.getCommentById);
router.get('/getMyComments', requireSignin, userMiddleWare, commentController.getMyComments);

router.get('/getCommentsForAnswer/:id', requireSignin, userMiddleWare, commentController.getCommentsForAnswer);

module.exports = router;
