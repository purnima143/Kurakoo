const express = require("express");

const {
    requireSignin,
    userMiddleWare
} = require("../common-middleware/common-middleware");
const notificationController = require("../controllers/notification.controller")
const router = express.Router();





router.get('/getNotifications', requireSignin, userMiddleWare, notificationController.getNotifications)
router.get('/getNotification/:id', requireSignin, userMiddleWare, notificationController.getNotification)

module.exports = router;
