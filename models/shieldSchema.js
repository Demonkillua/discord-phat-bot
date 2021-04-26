const mongoose = require("mongoose");

const shieldSchema = new mongoose.Schema({
    name: { type: String },
    itemID: { type: Number },
    description: { type: String },
    value: { type: Number },
    acBonus: { type: Number },
    speedPenalty: { type: Number },
    bulk: { type: Number },
    hardness: { type: Number },
    hp: { type: Number },
    bt: { type: Number },
});

const model = mongoose.model("ShieldModel", shieldSchema);

module.exports = model;