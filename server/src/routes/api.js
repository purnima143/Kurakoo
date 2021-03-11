const express = require('express');
const router = express.Router();
const { logger } = require('../middleware');
const { apiData } = require ('../controller/interfaces');

const apiData = {
  name: process.env.API_SECRET,
  age: 25,
  pass: false,
};

router.get("/", (req ,res) => {
  res.send(dataToSend);
});


module.exports = router;