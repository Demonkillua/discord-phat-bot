const profileModel = require("../models/profileSchema");
const currencyModel = require("../models/currencySchema"); // 0 - 3
const armorModel = require("../models/armorSchema"); // 4 - 15
const shieldModel = require("../models/shieldSchema"); // 16 - 19
const weaponModel = require("../models/weaponSchema"); // 20 - 71
const gearModel = require("../models/gearSchema");
const prefix = process.env.PREFIX;
module.exports = {
    name: "sell",
    aliases: [],
    permissions: [],
    description: "Sell an item from the inventory/bag",
    async execute(message, args, cmd, client, Discord, profileData) {
        let sell;
        if (args.length > 1) sell = `${args[0].slice(0,1).toUpperCase()}` + `${args[0].slice(1).toLowerCase()}` + " " + `${args[1].slice(0,1).toUpperCase()}` + `${args[1].slice(1).toLowerCase()}`;
        else sell = `${args[0].slice(0,1).toUpperCase()}` + `${args[0].slice(1).toLowerCase()}`;
        if (!args[0] || profileData.inventory.bag.indexOf(sell) === -1) return message.channel.send('Please enter the name of the item from your bag that you wish to sell');
        
        let item;
        try {
            item = await armorModel.findOne({ name: sell });
            if (!item) item = await shieldModel.findOne({ name: sell });
            if (!item) item = await weaponModel.findOne({ name: sell });
            if (!item) item = await gearModel.findOne({ name: sell });
            if (!item) return message.channel.send(`Error, ${sell} not found in the database`)

            amount = Math.floor(item.value / 2);

            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                    serverID: message.guild.id,
                }, {
                $pull: {
                    'inventory.bag': sell,
                },
                $inc: {
                    coins: amount,
                    totalcoins: amount,
                },
            });

            message.channel.send(`${sell} sold for **${amount}** coins`)
        } catch (err) {
            console.log(err)
        }

    }
}