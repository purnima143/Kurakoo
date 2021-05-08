const Space = require("../models/spaces.models");
const responseHandler = require("../helpers/responseHandler");

const createSpaces = (req, res) => {
    const { spaceName, description, count } = req.body;

    const space = new Space({
        spaceName: spaceName,
        description: description,
        createdBy: req.user._id,
        count: count
    });


    space.save(( error, space ) => {
        if(error)
            return res
                .status(400)
                .json(responseHandler(false, 400, "Space not created ! Something went wrong!"));
        
        if (space) {
            res.json(responseHandler(true, 200, "Space Created successfully", space));
        }
    });
};

module.exports = spaceController = {
    createSpaces
};



