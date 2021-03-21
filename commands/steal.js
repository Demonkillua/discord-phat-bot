const profileModel = require("../models/profileSchema");
module.exports = {
    name: "steal",
    aliases: [],
    permissions: [],
    cooldown: 900,
    description: "Steal coins from another user.",
    async execute(message, args, cmd, client, Discord, profileData, targetData) {
        const target = message.mentions.users.first();
        if (!target || !args[0]) {
            return message.channel.send("Target user was not found");
        } else {
            const memberTarget = message.guild.members.cache.get(target.id);
            var randomAmount = Math.floor(Math.random() * 300) + 1;
            var chance = Math.floor(Math.random() * 100) + 1;
            if (!targetData || targetData.coins % 1 != 0 || targetData.coins == 0 || chance <= 15) return message.channel.send(`${message.author.username}, you failed to steal from ${memberTarget}`);
            if (chance <= 25) {
                try {
                    if (randomAmount > profileData.coins) var randomAmount = profileData.coins;
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                            serverID: message.guild.id,
                        }, {
                        $inc: {
                            coins: -randomAmount,
                            totalCoins: -randomAmount,
                        },
                    }
                    );
                    await profileModel.findOneAndUpdate(
                        {
                            userID: memberTarget.user.id,
                            serverID: message.guild.id,
                        }, {
                        $inc: {
                            coins: randomAmount,
                            totalCoins: randomAmount,
                        },
                    }
                    );

                    return message.channel.send(`${message.author.username}, you were caught!\nYou had to pay ${memberTarget} **${randomAmount} coins**`);
                } catch (err) {
                    console.log(err);
                }
            }
            if (chance > 25) {
                if (randomAmount > targetData.coins) var randomAmount = targetData.coins;
                try {
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                            serverID: message.guild.id,
                        }, {
                        $inc: {
                            coins: randomAmount,
                            totalCoins: randomAmount,
                        },
                    }
                    );
                    await profileModel.findOneAndUpdate(
                        {
                            userID: memberTarget.user.id,
                            serverID: message.guild.id,
                        }, {
                        $inc: {
                            coins: -randomAmount,
                            totalCoins: -randomAmount,
                        },
                    }
                    );

                    return message.channel.send(`${message.author.username}, you successfully stole **${randomAmount}** coins from ${memberTarget}'s wallet`);
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
}