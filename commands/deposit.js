const profileModel = require("../models/profileSchema");
module.exports = {
    name: "deposit",
    aliases: ["dep"],
    permissions: [],
    description: "deposit coins into your bank!",
    async execute(message, args, cmd, client, Discord, profileData) {
        var amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit must be a whole number");
        if (amount > profileData.coins) var amount = profileData.coins
        try {
            if (amount == 0) return message.channel.send(`Failed to deposit ${args[0]}, wallet is currently empty.`)
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id
                }, {
                $inc: {
                    coins: -amount,
                    bank: amount,
                },
            }
            );

            return message.channel.send(`You successfully deposited **${amount}** into your bank`)
        } catch (err) {
            console.log(err);
        }
    },
};