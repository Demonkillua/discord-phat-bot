const profileModel = require("../models/profileSchema");
const prefix = process.env.PREFIX;

module.exports = {
    name: "expleader",
    aliases: ["expboard", "explb"],
    permissions: [],
    description: "Exp leaderboards!",
    async execute(message, args, cmd, client, Discord) {
        try {
            await profileModel.find({
                serverID: message.guild.id
            }).sort([
                ['exp', 'descending']
            ]).exec((err, res) => {
                if (err) console.log(err);

                let embed = new Discord.MessageEmbed()
                    .setTitle("Exp Leaderboard")
                    .setAuthor(`${message.member.displayName}`, `${message.author.displayAvatarURL()}`, '')
                    .setFooter(`Find with ${prefix}expleader or ${prefix}expboard or ${prefix}explb`)
                if (res.length === 0) {
                    embed.setColor("RED");
                    embed.addField("No data found", "Please type in chat to gain Exp!")
                } else if (res.length < 10) {
                    embed.setColor("BLURPLE");
                    for (i = 0; i < res.length; i++) {
                        let member = message.guild.members.cache.get(res[i].userID) || "User Left"
                        if (member === "User Left") {
                            embed.addField(`${i + 1}. ${member}`, `**Exp**: ${res[i].exp}`);
                        } else {
                            embed.addField(`${i + 1}. ${member.user.username}`, `**Exp**: ${res[i].exp}`);
                        }
                    }
                } else {
                    embed.setColor("BLURPLE");
                    for (i = 0; i < 10; i++) {
                        let member = message.guild.members.cache.get(res[i].userID) || "User Left"
                        if (member === "User Left") {
                            embed.addField(`${i + 1}. ${member}`, `**Exp**: ${res[i].exp}`);
                        } else {
                            embed.addField(`${i + 1}. ${member.user.username}`, `**Exp**: ${res[i].exp}`);
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