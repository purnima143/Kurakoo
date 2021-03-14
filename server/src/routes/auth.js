const express = require("express");
const { signup } = require("../controllers/auth.controller");
const { validateSignupRequest, isRequestValidated } = require("../validators/auth");
const router = express.Router();

router.post('/signup',validateSignupRequest, isRequestValidated, signup);


module.exports = router;