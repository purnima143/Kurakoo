const express = require('express');
const router = express.Router();

const example = require('./example.route');
const authRoutes = require("./routes/auth");

router.use('/example', example);
router.use("/", authRoutes);

module.exports = router;