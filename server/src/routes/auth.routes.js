const express = require("express");
const authController = require("../controllers/auth.controller");
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require("../validators/auth.validator");
const { requireSignin } = require("../common-middleware/middleware");
const router = express.Router();

/** @route      Get signin/signup
 *  @desc       login user
 *  @access     Public
 */

router.post("/", validateSignupRequest, isRequestValidated, authController.signup);
router.post("/signin", validateSigninRequest, isRequestValidated, authController.signin);
router.post("/signout", requireSignin, authController.signout);

module.exports = router;