const User = require('../models/user.model');
const jwt = require("jsonwebtoken");
const responseHandler = require('../helpers/responseHandler');

const signup = ( req, res) => {

    User.findOne({ email: req.body.email })
    .exec(( error, user ) => {
        if(user) return res.status(400).json(responseHandler( true, 400, "User is Already Registered", user ));

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

        _user.save(( error, data ) => {
            if(error){
                return res.status(201).json(responseHandler( false, 201, "User Created Successfully", data ));
           }
        });
    });
};

module.exports = authController = {
    signup
  };


