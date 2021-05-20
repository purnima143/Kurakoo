const Space = require("../models/spaces.models");
const responseHandler = require("../helpers/responseHandler");

const createSpaces = (req, res) => {
    const { spaceName, description } = req.body;

    const space = new Space({
        spaceName: spaceName,
        description: description,
        createdBy: req.user._id
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

const getSpaces = async( req, res ) => {
    spaces = await Space.find({ createdBy: req.user._id })
                .populate("createdBy", "_id firstName lastName")
                .sort("-createdAt")
    try{
        res.status(200).send({spaces})
    }
    catch(e){
        res.status(400).send("Something went wrong!")
    }
}

module.exports = spaceController = {
    createSpaces,
    getSpaces
};



