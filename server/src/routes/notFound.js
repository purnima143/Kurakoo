const express = require('express');
const router = express.Router();
const { logger } = require('../middleware');
const { notFoundData} = require ('../controller/interfaces');

const dataToSend=  notFoundData = {
  message: "Error 404 not found",
};

router.get("/", (req, res) => {
  res.send(dataToSend);
});

module.exports = router;
