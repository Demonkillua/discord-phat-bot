const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
    name: { type: String },
    itemID: { type: Number },
    description: { type: String },
    bulk: { type: Number },
    value: { type: Number },
});

const model = mongoose.model("CurrencyModel", currencySchema);

module.exports = model;