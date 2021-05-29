const Notification = require("../models/notification.model")
const responseHandler = require("../helpers/responseHandler");

const ObjectID = require('mongodb').ObjectID;

const getNotifications = async(req, res) => {
    try{
        const notifications = await Notification.find({notificationFor: req.user._id, status: "unread"})
                                    .sort("-createdAt")
        
        if(!notifications || notifications.length===0){
            return res
            .status(200)
            .json(
                responseHandler(
                    true,
                    200,
                    "no new notifications",
                )
            );
        }

        return res
        .status(200)
        .json(
            responseHandler(
                true,
                200,
                "unread notifications!",
                {notifications}
            )
        );
        
    }

    catch(e){
        console.log(e)
        return res
        .status(400)
        .json(
            responseHandler(
                false,
                400,
                "something went wrong!"
            )
        )
    }

}



module.exports = notificationController = {
    getNotifications,
};