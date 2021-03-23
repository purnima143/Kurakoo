const express = require("express");
const router = express.Router();

const example = require("./example.route");
const authRoutes = require("./auth.routes");

router.use("/example", example);
router.use("/signup", authRoutes);
router.use("/", authRoutes);
router.use("/", authRoutes);

module.exports = router;
