const { set } = require("mongoose");
const profileModel = require("../models/profileSchema");
module.exports = {
    name: "steal",
    aliases: [],
    permissions: [],
    cooldown: 900,
    description: "Steal coins from another user.",
    async execute(message, args, cmd, client, Discord, profileData, targetData) {
        const target = message.mentions.members.first();
        if (target.bot) {
            message.channel.send("Sorry, bot's are not a valid target");
            return this.cooldown = 0;
        }
        if (target.id == message.author.id) {
            message.channel.send("You can't steal from yourself!");
            return this.cooldown = 0;
        }
        if (!target || !args[0]) {
            message.channel.send("Target user was not found");
            return this.cooldown = 0;
        }
        if (!targetData && !target.bot) {
            message.channel.send("User was added to the database, please enter the command again")
            return this.cooldown = 0;
        }
        var randomAmount = Math.floor(Math.random() * 300) + 1;
        var bankAmount = randomAmount;
        var chance = Math.floor(Math.random() * 100) + 1;
        if (targetData.coins % 1 != 0 || chance <= 15) return message.channel.send(`**${message.member.displayName}**, you failed to steal from **${target.displayName}**`);
        if (chance <= 25) {
            try {
                if (randomAmount > profileData.coins) var randomAmount = profileData.coins;
                if (bankAmount > profileData.bank) var bankAmount = profileData.bank;
                if (randomAmount > 0) var bankAmount = 0;
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                        serverID: message.guild.id,
                    }, {
                    $inc: {
                        coins: -randomAmount,
                        bank: -bankAmount,
                        totalCoins: -randomAmount -bankAmount,
                    },
                }
                );
                await profileModel.findOneAndUpdate(
                    {
                        userID: target.id,
                        serverID: message.guild.id,
                    }, {
                    $inc: {
                        coins: randomAmount +bankAmount,
                        totalCoins: randomAmount +bankAmount,
                    },
                }
                );

                return message.channel.send(`**${message.member.displayName}**, you were caught!\nYou had to pay **${target.displayName} ${Math.floor(randomAmount + bankAmount)}** coins`);
            } catch (err) {
                console.log(err);
            }
        }
        if (chance > 25) {
            if (randomAmount > targetData.coins) var randomAmount = targetData.coins;
            if (targetData.coins == 0) return message.channel.send(`**${target.displayName}'s** wallet is currently empty`)
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
                        userID: target.id,
                        serverID: message.guild.id,
                    }, {
                    $inc: {
                        coins: -randomAmount,
                        totalCoins: -randomAmount,
                    },
                }
                );

                return message.channel.send(`${message.member.displayName}, you successfully stole **${randomAmount}** coins from **${target.displayName}'s** wallet`);
            } catch (err) {
                console.log(err);
            }
        }
    }
}