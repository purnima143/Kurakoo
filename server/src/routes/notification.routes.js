const express = require("express");

const {
    requireSignin,
    userMiddleWare
} = require("../common-middleware/common-middleware");
const notificationController = require("../controllers/notification.controller")
const router = express.Router();

// @route             Get signin/signup
// @desc              login user
// @param {}@access    Public




router.get('/getNotifications', requireSignin, userMiddleWare, notificationController.getNotifications)

module.exports = router;