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
    spaces = await Space.find({ id: req._id })
                .populate("createdBy", "_id spaceName description")
                .sort("-createdAt")
    try{
        res.status(200).send({spaces})
    }
    catch(e){
        res.status(400).send("Something went wrong!")
    }
}

const deleteSpaces  = async( req, res ) => {
    try{
        const space = await Space.findOneAndDelete({id: req.params.id, createdBy: req.user._id})
        if(!space) {
            res.status(400).send({message:"cannot delete"})
        }
        res.status(200).send({message:"Deleted"})
    }
    catch(e){
        res.status(500).send;
    }
}

const getSpacesbyId = async( req, res ) => {
    try{
        const space = await Space.find({createdBy: req.user._id})
        if(!space) {
            res.status(400).send({message:"cannot find spaces with respective user id"})
        }
        res.status(200).send({space})
    }
    catch(e){
        res.status(500).send;
    }
}

module.exports = spaceController = {
    createSpaces,
    getSpaces,
    deleteSpaces,
    getSpacesbyId
};



