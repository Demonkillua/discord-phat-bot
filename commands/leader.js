const profileModel = require("../models/profileSchema");
const prefix = process.env.PREFIX;

module.exports = {
    name: "leaders",
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
                    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`, '')
                    .setFooter(`Find with ${prefix}leader or ${prefix}board or ${prefix}lb`)
                //if there are no results
                if (res.length === 0) {
                    embed.setColor("RED");
                    embed.addField("No data found", "Please type in chat to gain coins!")
                } else if (res.length < 10) {
                    //less than 10 results
                    embed.setColor("BLURPLE");
                    for (i = 0; i < res.length; i++) {
                        let member = message.guild.members.cache.get(res[i].userID) || "User Left"
                        if (member === "User Left") {
                            embed.addField(`${i + 1}. ${member}`, `**Coins**: ${res[i].coins + res[i].bank}`);
                        } else {
                            embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: ${res[i].coins + res[i].bank}`);
                        }
                    }
                } else {
                    //more than 10 results
                    embed.setColor("BLURPLE");
                    for (i = 0; i < 10; i++) {
                        let member = message.guild.members.cache.get(res[i].userID) || "User Left"
                        if (member === "User Left") {
                            embed.addField(`${i + 1}. ${member}`, `**Coins**: ${res[i].coins + res[i].bank}`);
                        } else {
                            embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: ${res[i].coins + res[i].bank}`);
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