const jwt = require("jsonwebtoken");
const responseHandler = require("../helpers/responseHandler");

const requireSignin = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
    } else {
        return res
            .status(401)
            .json(responseHandler(false, 401, "authorization required", null));
    }
    next();
};

const userMiddleWare = (req, res, next) => {
    if (req.user.role !== "user") {
        return res
            .status(401)
            .json(responseHandler(false, 401, "User Acess Denied!", null));
    }
    next();
};

module.exports = commonMiddleware = {
    requireSignin,
    userMiddleWare
};
