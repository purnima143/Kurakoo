const express = require('express');
const { signup, signin } = require('../controllers/auth.controller');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth.validator');
const router = express.Router();


router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/signin',validateSigninRequest, isRequestValidated, signin);



module.exports = router;