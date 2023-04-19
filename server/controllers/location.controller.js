const Location = require("../models/location.model");

module.exports = {
    findAllLocations: (req, res) => {
        Location.find()
            .then((allLocations) => {
                console.log(allLocations);
                res.json(allLocations);
            })
            .catch((err) => {
                console.log("findAllLocations has failed");
                res.json({message: "Something went wrong in findAllLocations", error: err})
            })
    },

    findOneLocation: (req, res) => {
        Location.findById({_id: req.params.id})
            .then((oneLocation) => {
                console.log(oneLocation);
                res.json(oneLocation);
            })
            .catch((err) => {
                console.log(err);
                res.json({message: "Something went wrong in findOneLocation", error: err})
            })
    }
}