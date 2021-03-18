const express = require("express");
const router = express.Router();

const example = require("./example.route");
const authRoutes = require("./auth.routes");

router.use("/example", example);
router.use("/signup", authRoutes);

module.exports = router;
