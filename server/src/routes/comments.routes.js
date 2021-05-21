const express = require('express');

const {
    requireSignin,
    userMiddleWare
} = require("../common-middleware/middleware");

const commentController = require('../controllers/comments.controller');
const router = express.Router();

router.post('/postComment', requireSignin, userMiddleWare, commentController.postComment);

module.exports = router;
