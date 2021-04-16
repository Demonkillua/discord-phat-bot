const profileModel = require("../models/profileSchema");
module.exports = {
    name: "deposit",
    aliases: ["dep"],
    permissions: [],
    description: "deposit coins into your bank!",
    async execute(message, args, cmd, client, Discord, profileData) {
        var amount = args[0];
        if (amount > profileData.coins || amount == "all") var amount = profileData.coins
        if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit must be a whole number");
        try {
            if (amount == 0) return message.channel.send(`Failed to deposit **${args[0]}** coins. Your wallet is currently empty.`)
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                    serverID: message.guild.id,
                }, {
                $inc: {
                    coins: -amount,
                    bank: amount,
                },
            }
            );

            return message.channel.send(`You successfully deposited **${amount}** coins into your bank`)
        } catch (err) {
            console.log(err);
        }
    },
};