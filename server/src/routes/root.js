const express = require("express");
const router = express.Router();

const example = require("./example.route");
const authRoutes = require("./auth.routes");
const questionRoutes = require("./questions.routes");
const answerRoutes = require("./answers.routes");

router.use("/example", example);
router.use("/", authRoutes);
router.use("/", questionRoutes);
router.use("/", answerRoutes);

module.exports = router;
