const mongoose = require("mongoose");

const weaponSchema = new mongoose.Schema({
    name: { type: String },
    itemID: { type: Number },
    description: { type: String },
    category: { type: String },
    value: { type: Number },
    damage: { type: Number },
    damage2: { type: Number },
    damageType: { type: String },
    damageType2: { type: String },
    bulk: { type: Number },
    range: { type: Number },
    reload: { type: Number },
    hands: { type: Number },
    group: { type: String },
    weaponTraits: { type: Array },
});

const model = mongoose.model("WeaponModel", weaponSchema);

module.exports = model;