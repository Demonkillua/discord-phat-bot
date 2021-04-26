const mongoose = require("mongoose");

const gearSchema = new mongoose.Schema({
    name: { type: String },
    itemID: { type: Number },
    itemLevel: { type: Number },
    description: { type: String },
    value: { type: Number },
    bulk: { type: Number },
    hands: { type: Number },
});

const model = mongoose.model("GearModel", gearSchema);

module.exports = model;