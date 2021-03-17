const express = require("express");
const authController = require("../controllers/auth.controller");
const { validateSignupRequest, isRequestValidated } = require("../validators/auth.validator");
const router = express.Router();

/** @route      GET /api/signup
 *  @desc       fetch single signup
 *  @access     Public
 */

router.post('/', validateSignupRequest, isRequestValidated, authController.signup);


module.exports = router;