const mongoose = require("mongoose");

const armorSchema = new mongoose.Schema({
    name: { String },
    itemID: { Number },
    category: { String },
    description: { String },
    value: { Number },
    acBonus: { Number },
    dexCap: { Number },
    checkPenalty: { Number },
    speedPenalty: { Number },
    strength: { Number },
    bulk: { Number },
    group: { String },
    armorTraits: { String },
});

const model = mongoose.model("ArmorModel", armorSchema);

module.exports = model;