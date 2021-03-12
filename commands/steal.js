const profileModel = require("../models/profileSchema");
module.exports = {
    name: "steal",
    aliases: [],
    permissions: [],
    cooldown: 900,
    description: "Steal coins from another user.",
    async execute(message, args, cmd, client, Discord, profileData) {
        const target = message.mentions.users.first();
        const memberTarget = message.guild.members.cache.get(target.id);
        //const targetWallet = target.profileData.coins;
        const randomAmount = Math.floor(Math.random() * 200) + 1;
        const chance = Math.floor(Math.random() * 100) + 1;
        if (target) {
            //if (targetWallet % 1 != 0 || targetWallet <= 0 || chance <= 30) return message.channel.send(`You failed to steal from ${memberTarget}`);
            if (chance <= 15) return message.channel.send(`You failed to steal from ${memberTarget}`);
            if (chance <= 25) return message.channel.send("You were caught!\n fortunately nothing happened. **WIP**");
            // try {
            //     await profileModel.findOneAndUpdate(
            //         {
            //             userID: message.author.id
            //         }, {
            //         $inc: {
            //             coins: -randomAmount,
            //         },
            //         }
            //     ); 
            //     await profileModel.findOneAndUpdate(
            //         {
            //             userID: memberTarget.user.id
            //         }, {
            //         $inc: {
            //             coins: randomAmount,
            //         },
            //         }
            //     );

            //     return message.channel.send(`You were caught and had to pay ${memberTarget} **${randomAmount} coins**`);
            // }
            if (chance > 25) try {
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

                return message.channel.send(`You successfully stole **${randomAmount}** from ${memberTarget}'s wallet`);
            } catch (err) {
                console.log(err);
            }
        } else {
            return message.channel.send("Target user not found");
        }
    }
}