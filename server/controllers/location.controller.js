const Location = require("../models/location.model");

module.exports = {
    findAllLocations: (req, res) => {
        Location.find()
            .then((allLocations) => {
                console.log(allLocations);
                res.json(allMovies);
            })
            .catch((err) => {
                console.log("findAllLocations has failed");
                res.json({message: "Something went wrong in findAll", error: err})
            })
    }
}