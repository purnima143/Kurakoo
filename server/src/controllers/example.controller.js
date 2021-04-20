const Example = require("../models/example.model");
const responseHandler = require("../helpers/responseHandler");

const sampleData = {
    name: "John Doe",
    age: 13,
    pass: true
};

const getExample = (req, res) => {
    try {
        return res
            .status(200)
            .json(
                responseHandler(
                    true,
                    200,
                    "Example fetched Successfully",
                    sampleData
                )
            );
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json(responseHandler(false, 500, "Server Error", null));
    }
};

module.exports = exampleController = {
    getExample
};
