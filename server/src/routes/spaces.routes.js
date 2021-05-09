const express = require("express");
const { requireSignin, userMiddleWare, spaceMiddleware } = require("../common-middleware/middleware");
const spaceController = require("../controllers/space.controller");
const { validateSpaceRequest, isRequestValidated } = require("../validators/space.validator");

const router = express.Router();

router.post("/createSpace", validateSpaceRequest, isRequestValidated, requireSignin, userMiddleWare, spaceMiddleware, spaceController.createSpaces);

module.exports = router;