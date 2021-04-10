require('dotenv').config();
const profileModel = require("../../models/profileSchema");

const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
    const prefix = process.env.PREFIX;

    if (message.author.bot) return;

    const expToAdd = Math.ceil(Math.random() * 50) + 1;
    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 1000,
                bank: 0,
                totalCoins: 1000,
                exp: expToAdd,
                level: 1,
            });
        }
    } catch (err) {
        console.log(err);
    }

    try {
        await profileModel.findOneAndUpdate({
            userID: message.author.id
        }, {
            $inc: {
                exp: expToAdd,
            },
        }
        );
    } catch (err) {
        console.log(err);
    }

    if (profileData.exp >= 3600000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 20,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 2550000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 19,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 1800000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 18,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 1300000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 17,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 890000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 16,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 635000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 15,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 445000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 14,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 315000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 13,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 220000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 12,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 155000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 11,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 105000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 10,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 75000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 9,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 51000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 8,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 35000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 7,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 23000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 6,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 15000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 5,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 9000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 4,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 5000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 3,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    } else if (profileData.exp >= 2000) {
        try {
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $set: {
                    level: 2,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    }

    if (!message.content.startsWith(prefix)) return;

    let targetData;
    try {
        if (message.guild.members.cache.get(message.mentions.users.first().id)) {
            targetData = await profileModel.findOne({ userID: message.guild.members.cache.get(message.mentions.users.first().id).user.id });
            if (!targetData) {
                let profile = await profileModel.create({
                    userID: message.guild.members.cache.get(message.mentions.users.first().id).user.id,
                    serverID: message.guild.members.cache.get(message.mentions.users.first().id).guild.id,
                    coins: 1000,
                    bank: 0,
                    totalCoins: 1000,
                    exp: 0,
                    level: 1,
                });
            }
        }
    } catch (err) {
        console.log(err);
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) ||
        client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]

    if (!command) return;

    if (command.permissions.length) {
        let invalidPerms = []
        for (const perm of command.permissions) {
            if (!validPermissions.includes(perm)) {
                return console.log(`Invalid Permissions ${perm}`);
            }
            if (!message.member.hasPermission(perm)) {
                invalidPerms.push(perm);
            }
        }
        if (invalidPerms.length) {
            return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
        }
    }


    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if (time_stamps.has(message.author.id)) {
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if (current_time < expiration_time) {
            const time_left = (expiration_time - current_time) / 1000;
            var days = Math.floor(time_left.toFixed(1) / 86400);
            var hours = Math.floor((time_left.toFixed(1) - (days * 86400)) / 3600);
            var minutes = Math.floor((time_left.toFixed(1) - (days * 86400) - (hours * 3600)) / 60);
            var seconds = Math.ceil(time_left.toFixed(1) - (days * 86400) - (hours * 3600) - (minutes * 60));

            if (days >= 1) {
                return message.reply(`please wait **${days}** day(s), **${hours}** hour(s), **${minutes}** minute(s), and **${seconds}** second(s) to use the \`${prefix}${command.name}\` command again.`)
            } else if (hours >= 1) {
                return message.reply(`please wait **${hours}** hour(s), **${minutes}** minute(s), and **${seconds}** second(s) to use the \`${prefix}${command.name}\` command again.`)
            } else if (minutes >= 1) {
                return message.reply(`please wait **${minutes}** minute(s) and **${seconds}** second(s) to use the \`${prefix}${command.name}\` command again.`)
            } else return message.reply(`please wait **${Math.ceil(time_left.toFixed(1))}** more second(s) to use the \`${prefix}${command.name}\` command again.`)
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    try {
        command.execute(message, args, cmd, client, Discord, profileData, targetData);
    } catch (err) {
        message.reply("There was an error trying to execute this command!");
        console.log(err);
    }

}