const express = require('express');
const router = express.Router();
const { lodger } = require('../common-middleware');
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
