const User = require('../models/user.model');
const jwt = require("jsonwebtoken");

exports.signup = ( req, res) => {

    User.findOne({ email: req.body.email })
    .exec(( error, user ) => {
        if(user) return res.status(400).json({
            message: "User is Already Registered"
        });

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            userName: Math.random().toString()
        });

        _user.save(( erroe, data ) => {
            if(error){
                return res.status(400).json({
                    message: "User Created Successfullt....!"
                })
            }
        });
    });
}


