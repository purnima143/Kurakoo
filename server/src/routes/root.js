const example = require('./example.route');

const express = require('express');
const router = express.Router();

router.use('/example', example);

module.exports = router;
