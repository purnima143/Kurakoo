const express = require("express");
const router = express.Router();

const example = require("./example.route");
const authRoutes = require("./auth.routes");
const signinRoutes = require("./auth.signin");

router.use("/example", example);
router.use("/signup", authRoutes);
router.use("/signin", signinRoutes);

module.exports = router;
