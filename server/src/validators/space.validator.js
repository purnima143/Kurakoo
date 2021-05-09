const { check, validationResult } = require("express-validator");

const validateSpaceRequest = [
    check("spaceName")
    .notEmpty()
    .withMessage("spaceName is required"),
    check("description")
    .notEmpty()
    .withMessage("description is Required"),
]

const isRequestValidated = ( req, res, next ) => {
    const errors =  validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0].msg})
    }
    next();

}

module.exports = spaceValidator = {
    validateSpaceRequest,
    isRequestValidated
};