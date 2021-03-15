const { check, validationResult } = require("express-validator");

const validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),
    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    check('email')
    .isEmail()
    .withMessage('lastName is required'),
    check('password')
    .isLength({min: 6})
    .withMessage('Password must be off 6 character long')
];

const isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg})
    }
    next();
}

module.exports = authValidator = {
    validateSignupRequest,
    isRequestValidated
};