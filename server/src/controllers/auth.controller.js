const User = require('../models/user.model');
const jwt = require("jsonwebtoken");
const responseHandler = require('../helpers/responseHandler');

const signup = ( req, res) => {

    User.findOne({ email: req.body.email })
    .exec(( error, user ) => {
        if(user) return res.status(400).json(responseHandler( false, 400, "User is Already Registered" ));
        if(error) return res.status(400).json(responseHandler( false, 400, "Invalid Cradentials or Error occured", null ));

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
                return res.status(400).json(responseHandler( false, 400, "Something went wrong...!", null ));
           }

           const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: 'Kurakoo'
          },  process.env.JWT_SECRET);

           if(data){
            return res.status(201).json(responseHandler( true, 201, "User Created Succesfully...!", {token} ));
       }
        });
    });
};
const signin = (req,res) => {
    User.findOne({ email: req.body.email})
    .exec ( (error, user) => {
        if(error)   return res.status(400).json(responseHandler( false, 400, "Something went wrong...!", null ));

        if( user){

            if(user.authenticate(req.body.password)){
                const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h'});
                const { _id, firstName, lastName, email, role, fullName } = user;
                res.status(200).json(responseHandler( true, 200, "User Logged in", {token, user} ));
            
            } else {
                return res.status(400).json(responseHandler( false, 400, "Invalid Password", null ));
            }

        } else {
            return res.status(400).json(responseHandler( false, 400, "Something went wrong...!", null ));
        }
    })
}

const signout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json(responseHandler( true, 200, "Signout Successful", null ));
}
module.exports = authController = {
    signup,
    signin,
    signout
  };


