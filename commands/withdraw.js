const profileModel = require("../models/profileSchema");
module.exports = {
    name: "withdraw",
    aliases: ["wd"],
    permissions: [],
    description: "withdraw coins from your bank!",
    async execute(message, args, cmd, client, Discord, profileData) {
        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withraw must be a whole number");
        try {
            if (amount > profileData.bank) return message.channel.send(`**${message.member.displayName}**, you don't have enough coins to withdraw **${args[0]}** coins`)
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                    serverID: message.guild.id,
                }, {
                $inc: {
                    coins: amount,
                    bank: -amount,
                },
            }
            );

            return message.channel.send(`**${message.member.displayName}**, you successfully withdrawn **${amount}** into your wallet`)
        } catch (err) {
            console.log(err);
        }
    },
};