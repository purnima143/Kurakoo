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
        if(error) return res.status(400).json({ error});
        if( user){

            if(user.authenticate(req.body.password)){
                const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h'});
                const { _id, firstName, lastName, email, role, fullName } = user;
                res.status(200).json({
                    token,
                    user: {
                        _id, firstName, lastName, email, role, fullName
                    }
                });
            
            } else {
                return res.status(400).json({
                    message: 'Invalid Password'
                })
            }

        } else {
            return res.status(400).json({message: 'Something went wrong'});
        }
    })
}

const requireSignin = ( req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
}


module.exports = authController = {
    signup,
    signin,
    requireSignin
  };


