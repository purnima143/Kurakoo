const express = require('express');
const router = express.Router();
const { lodger } = require('../common-middleware');
const { apiData } = require ('../controller/interfaces');

const dataToSend= apiData = {
  name: "John Doe",
  age: 13,
  pass: true,
};

router.get("/", (req, res) => {
  res.send(dataToSend);
});

module.exports = router;
