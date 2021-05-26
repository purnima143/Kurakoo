const express = require("express");
const { requireSignin, userMiddleWare } = require("../common-middleware/common-middleware");
const spaceController = require("../controllers/space.controller");
const { validateSpaceRequest, isRequestValidated } = require("../validators/space.validator");

const router = express.Router();

router.post("/createSpace", validateSpaceRequest, isRequestValidated, requireSignin, userMiddleWare, spaceController.createSpaces);
router.get("/getSpaces", requireSignin, userMiddleWare, spaceController.getSpaces);
router.delete("/deleteSpace/:id", requireSignin, userMiddleWare, spaceController.deleteSpaces);
router.get("/getSpacebyId", requireSignin, userMiddleWare, spaceController.getSpacesbyId);

module.exports = router;