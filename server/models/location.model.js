const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A location's name is required"]
    },
    gold: {
        type: Number,
        required: [true, "A location's gold value is required"]
    }
}, {timeseries: true})

module.exports = mongoose.model("Location", LocationSchema);