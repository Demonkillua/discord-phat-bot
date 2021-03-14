const profileModel = require("../models/profileSchema");
module.exports = {
    name: "steal",
    aliases: [],
    permissions: [],
    //cooldown: 900,
    description: "Steal coins from another user.",
    async execute(message, args, cmd, client, Discord, profileData) {
        const target = message.mentions.users.first();
        const memberTarget = message.guild.members.cache.get(target.id);

        let targetData;
        try {
            targetData = await profileModel.findOne({ userID: memberTarget.user.id });
            if (!profileData) {
                let profile = await profileModel.create({
                    userID: message.author.id,
                    serverID: message.guild.id,
                    coins: 1000,
                    bank: 0,
                });
            }
        } catch (err) {
            console.log(err)
        }

        const targetWallet = targetData.coins;
        var randomAmount = Math.floor(Math.random() * 300) + 1;
        var chance = Math.floor(Math.random() * 100) + 1;
        if (target) {
            if (targetWallet % 1 != 0 || targetWallet == 0 || chance <= 15) return message.channel.send(`${message.author.username}, you failed to steal from ${memberTarget}`);
            if (chance <= 25) {
                try {
                    if (randomAmount > profileData) var randomAmount = targetWallet;
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id
                        }, {
                        $inc: {
                            coins: -randomAmount,
                        },
                        }
                    ); 
                    await profileModel.findOneAndUpdate(
                        {
                            userID: memberTarget.user.id
                        }, {
                        $inc: {
                            coins: randomAmount,
                        },
                        }
                    );

                    return message.channel.send(`${message.author.username}, you were caught!\nYou had to pay ${memberTarget} **${randomAmount} coins**`);
                } catch (err) {
                    console.log(err);
                }
            }
            if (chance > 25) {
                if (randomAmount > targetWallet) var randomAmount = targetWallet;
                try {
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id
                        }, {
                        $inc: {
                            coins: randomAmount,
                        },
                    }
                    );
                    await profileModel.findOneAndUpdate(
                        {
                            userID: memberTarget.user.id
                        }, {
                        $inc: {
                            coins: -randomAmount,
                        },
                    }
                    );
            
                    return message.channel.send(`${message.author.username}, you successfully stole **${randomAmount}** coins from ${memberTarget}'s wallet`);
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            return message.channel.send("Target user was not found");
        }
    }
}