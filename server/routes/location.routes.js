const LocationController = require("../controllers/location.controller");

module.exports = (app) => {
    app.get('/api/locations', LocationController.findAllLocations);
    app.get("/api/locations/id", LocationController.findOneLocation);
}