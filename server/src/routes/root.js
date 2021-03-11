const express = require('express');
const router = express.Router();
const { logger } = require('../middleware');
const { apiData } = require ('../controller/interfaces');

const dataToSend= apiData = {
  name: "John Doe",
  age: 13,
  pass: true,
};

router.get("/logger", (req, res) => {
  res.send(dataToSend);
});

module.exports = router;
