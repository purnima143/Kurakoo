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
            data: 'Kurakoo',
            _id: _user._id.toString()
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

        if( user){

            if(user.authenticate(req.body.password)){
                const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h'});
                const { _id, firstName, lastName, email, role, fullName } = user;
                res.status(200).json(responseHandler( true, 200, "User Logged in", {token, user} ));
            
            } else {
                return res.status(401).json(responseHandler( false, 401, "Invalid Password", null ));
            }

        } else {
            return res.status(400).json(responseHandler( false, 400, "Invalid Profile", null ));
        }
    })
}

const signout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json(responseHandler( true, 200, "Signout Successful", null ));
}

const update = async(req, res) => {
    try{
        const user = await User.findById(req.user._id)
        console.log(user)
        const updates = Object.keys(req.body)
        const allowedUpdates = ['firstName','lastName','email','password'] //allowing a user to update only these fields
        const isValid = updates.every((update)=>{
            return allowedUpdates.includes(update)
        })
        if(!isValid){
            res.status(400).send({error: 'Invalid Updates!'})
        }
        try{    
            updates.forEach(update => {
                user[update] = req.body[update]
            })
            
            await user.save()
            const {_id, firstName,lastName,email} = user
            return res.status(200).json({user:{_id,firstName,lastName,email}})
    
        }
        catch(e){
            res.status(400).send({error: "something went wrong!"})
        }
    }
    catch(e){
        res.status(400).send({error: "something went wrong!"})
    }
    
}

module.exports = authController = {
    signup,
    signin,
    signout,
    update
  };


