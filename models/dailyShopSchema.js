const mongoose = require("mongoose");

const dailyShopSchema = new mongoose.Schema({
    serverID: { type: String, require: true },
    shopID: { type: Array },
    updatedAt: { type: Date },
});

const model = mongoose.model("dailyShopModel", dailyShopSchema);

module.exports = model;