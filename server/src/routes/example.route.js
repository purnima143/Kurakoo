const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/example.controller');

/** @route      GET /api/example
 *  @desc       fetch single example
 *  @access     Public
 */
router.get('/', exampleController.getExample);

module.exports = router;