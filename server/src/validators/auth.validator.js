const { check, validationResult } = require('express-validator');

exports.validateSignupRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),
    check('course')
    .notEmpty()
    .withMessage('course is required'),
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long'),
    check('year')
    .notEmpty()
    .withMessage('Year is required'),
    check('clgName')
    .notEmpty()
    .withMessage('College Name is required')
];

exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long')
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}