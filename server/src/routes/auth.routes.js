const express = require("express");
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const {
    validateSignupRequest,
    validateSigninRequest,
    validateUpdateRequest,
    isRequestValidated
} = require("../validators/auth.validator");
const { requireSignin, userMiddleWare } = require("../common-middleware/common-middleware");
const router = express.Router();

// @route             Get signin/signup
// @desc              login user
// @param {}@access    Public

router.post(
    "/signup",
    validateSignupRequest,
    isRequestValidated,
    authController.signup,
    
);
router.post(
    "/signin",
    validateSigninRequest,
    isRequestValidated,
    authController.signin
);
router.post("/signout", requireSignin, authController.signout);
router.patch(
    "/update",
    validateUpdateRequest,
    isRequestValidated,
    requireSignin,
    authController.update
);

router.put("/follow/:user_id", requireSignin, userMiddleWare, userController.following );

router.delete('/deleteProfile', requireSignin, authController.deleteProfile)

module.exports = router;
