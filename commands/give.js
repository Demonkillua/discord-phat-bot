const profileModel = require("../models/profileSchema");
module.exports = {
    name: "give",
    aliases: ["gift"],
    permissions: [],
    description: "give a user some coins",
    async execute(message, args, cmd, client, Discord, profileData, targetData) {
        if (!args.length) return message.channel.send('You need to mention a player to give them coins');
        const amount = args[1];
        const target = message.mentions.users.first();
        if (!target) return message.channel.send("No user found")
        if (amount % 1 != 0 || amount <= 0) return message.channel.send("Amount must be a whole number");
        if (!amount) return message.channel.send("No amount entered")
        try {
            if (!targetData) return message.channel.send(`${message.guild.members.cache.get(target.id)} was added to the database, please try again`);
            if (amount > profileData.coins) return message.reply(`You do not have enought coins in your wallet to give **${amount}** coins`);
            await profileModel.findOneAndUpdate({
                userID: target.id
            }, {
                $inc: {
                    coins: amount,
                    totalCoins: amount,
                },
            }
            );
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: -amount,
                    totalCoins: -amount,
                },
            }
            );

            return message.channel.send(`You successfully gave ${message.guild.members.cache.get(target.id)} **${amount}** coins`);
        } catch (err) {
            console.log(err);
        }
    },
};