const profileModel = require("../models/profileSchema");
const prefix = process.env.PREFIX;

module.exports = {
    name: "leader",
    aliases: ["board", "lb"],
    permissions: [],
    description: "Coins leaderboards!",
    async execute(message, args, cmd, client, Discord) {
        try {
            await profileModel.find({
                serverID: message.guild.id
            }).sort([
                ['totalCoins', 'descending']
            ]).exec((err, res) => {
                if (err) console.log(err);

                let embed = new Discord.MessageEmbed()
                    .setTitle("Coins Leaderboard")
                    .setAuthor(`${message.member.displayName}`, `${message.author.displayAvatarURL()}`, '')
                    .setFooter(`Find with ${prefix}leader or ${prefix}board or ${prefix}lb`)
                if (res.length === 0) {
                    embed.setColor("RED");
                    embed.addField("No data found", "Please type in chat to gain coins!")
                } else if (res.length < 10) {
                    embed.setColor("BLURPLE");
                    for (i = 0; i < res.length; i++) {
                        let member = message.guild.members.cache.get(res[i].userID) || "User Left"
                        if (member === "User Left") {
                            embed.addField(`${i + 1}. ${member}`, `**Coins**: ${res[i].totalCoins}`);
                        } else {
                            embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: ${res[i].totalCoins}`);
                        }
                    }
                } else {
                    embed.setColor("BLURPLE");
                    for (i = 0; i < 10; i++) {
                        let member = message.guild.members.cache.get(res[i].userID) || "User Left"
                        if (member === "User Left") {
                            embed.addField(`${i + 1}. ${member}`, `**Coins**: ${res[i].totalCoins}`);
                        } else {
                            embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: ${res[i].totalCoins}`);
                        }
                    }
                }

                message.channel.send(embed);
                message.delete()
            })
        } catch (err) {
            console.log(err);
        }
    },
};