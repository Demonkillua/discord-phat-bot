const profileModel = require("../models/profileSchema");
module.exports = {
    name: "admingive",
    aliases: ["admingift"],
    permissions: ["ADMINISTRATOR"],
    description: "give a user some coins",
    async execute(message, args, cmd, client, Discord, profileData) {
        if (!args.length) return message.channel.send('You need to mention a player to give them coins');
        const amount = args[1];
        const target = message.mentions.members.first();
        if (!target) return message.channel.send("User entered does not exist")
        if (amount % 1 != 0 || amount <= 0) return message.channel.send("Amount must be a whole number");
        try {
            const targetData = await profileModel.findOne({ userID: target.id });
            if (!targetData) return message.channel.send(`**${target.displayName}** was added to the database, please try again.`);
            await profileModel.findOneAndUpdate({
                userID: target.id,
                serverID: message.guild.id,
            }, {
                $inc: {
                    coins: amount,
                    totalCoins: amount,
                },
            }
            );

            return message.channel.send(`You successfully gave **${target.displayName} ${amount}** coins into their wallet`)
        } catch (err) {
            console.log(err);
        }
    },
};