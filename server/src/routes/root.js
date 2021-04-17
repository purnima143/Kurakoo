const express = require("express");
const router = express.Router();
// example route
const example = require("./example.route");

// Authantication routes
const authRoutes = require("./auth.routes");


// Question Route
const questionRoutes = require("./questions.routes");

// Answer route
const answerRoutes = require("./answers.routes");

router.use("/example", example);
router.use("/", authRoutes);
router.use("/", questionRoutes);
router.use("/", answerRoutes);

module.exports = router;
