const express = require('express');
const router = express.Router();

const dataToSend = {
  name: "John Doe",
  age: 13,
  pass: true,
};

router.get("/", (req, res) => {
  return res.send(dataToSend);
});

module.exports = router;
