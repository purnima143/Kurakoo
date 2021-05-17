const responseHandler = require("../helpers/responseHandler");

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next()
    } else {
      res.status(401)
      .json(responseHandler(false, 401, "Not authorized as an admin", null));
    }
  }

  module.exports = admin;