const path = require("path")
const express = require("express");
const multer = require("multer");

const router = express.Router()

//file to be uploaded and their name
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

//check if the file to be uploaded is image or not
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

//single img to be uploaded at a time 
//this will give us path that will be set as the profile pic in the frontend
router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

module.exports = router;