require('dotenv').config();
const profileModel = require("../../models/profileSchema");

const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
    const prefix = process.env.PREFIX;

    if (message.author.bot) return;

    const expToAdd = Math.ceil(Math.random() * 50) + 1;
    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id, serverID: message.guild.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 1000,
                bank: 0,
                totalCoins: 1000,
                exp: expToAdd,
                level: 1,
                inventory: {
                    head: null,
                    neck: null,
                    cloak: null,
                    hands: null,
                    ring1: null,
                    ring2: null,
                    belt: null,
                    feet: null,
                    lhand: null,
                    rhand: null,
                    bag: [

                    ],
                },
            });
        }
    } catch (err) {
        console.log(err);
    }

    let targetData;
    try {
        if (message.mentions.members.first().id && !message.mentions.users.first().bot) {
            targetData = await profileModel.findOne({ userID: message.mentions.members.first().id, serverID: message.guild.id });
            if (!targetData) {
                let profile = await profileModel.create({
                    userID: message.mentions.members.first().id,
                    serverID: message.guild.id,
                    coins: 1000,
                    bank: 0,
                    totalCoins: 1000,
                    exp: 0,
                    level: 1,
                    inventory: {
                        head: null,
                        neck: null,
                        cloak: null,
                        hands: null,
                        ring1: null,
                        ring2: null,
                        belt: null,
                        feet: null,
                        lhand: null,
                        rhand: null,
                        bag: [
                            
                        ],
                    },
                });
            }
        }
    } catch (err) {
        console.log(err);
    }

    try {
        await profileModel.findOneAndUpdate({
            userID: message.author.id,
            serverID: message.guild.id,
        }, {
            $inc: {
                exp: expToAdd,
            },
        }
        );
    } catch (err) {
        console.log(err);
    }

    let channelID;
    if (message.guild.id === "535597599042961414") channelID = "810649968633315330";
    else if (message.guild.id === "701480336311451799") channelID = "810694548892024893";
    else channelID = message.channel.id;

    if (profileData.exp >= 3600000 && profileData.level === 19) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **20**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 20,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 2550000 && profileData.level === 18) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **19**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 19,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 1800000 && profileData.level === 17) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **18**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 18,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 1300000 && profileData.level === 16) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **17**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 17,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 890000 && profileData.level === 15) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **16**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 16,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 635000 && profileData.level === 14) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **15**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 15,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 445000 && profileData.level === 13) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **14**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 14,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 315000 && profileData.level === 12) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **13**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 13,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 220000 && profileData.level === 11) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **12**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 12,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 155000 && profileData.level === 10) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **11**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 11,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 105000 && profileData.level === 9) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **10**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 10,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 75000 && profileData.level === 8) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **9**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 9,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 51000 && profileData.level === 7) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **8**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 8,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 35000 && profileData.level === 6) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **7**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 7,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 23000 && profileData.level === 5) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **6**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 6,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 15000 && profileData.level === 4) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **5**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 5,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 9000 && profileData.level === 3) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **4**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 4,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (profileData.exp >= 5000 && profileData.level === 2) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **3**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 3,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };
    if (5000 > profileData.exp >= 2000 && profileData.level === 1) {
        try {
            client.channels.cache.get(channelID).send(`${message.author}, you have reached level **2**!`);
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
                serverID: message.guild.id,
            }, {
                $set: {
                    level: 2,
                },
            }
            );
        } catch (err) {
            console.log(err);
        }
    };

    if (!message.content.startsWith(prefix)) return;

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
                return message.channel.send(`${message.member.displayName}, please wait **${days}** day(s), **${hours}** hour(s), **${minutes}** minute(s), and **${seconds}** second(s) to use the \`${prefix}${command.name}\` command again.`)
            } else if (hours >= 1) {
                return message.channel.send(`${message.member.displayName}, please wait **${hours}** hour(s), **${minutes}** minute(s), and **${seconds}** second(s) to use the \`${prefix}${command.name}\` command again.`)
            } else if (minutes >= 1) {
                return message.channel.send(`${message.member.displayName}, please wait **${minutes}** minute(s) and **${seconds}** second(s) to use the \`${prefix}${command.name}\` command again.`)
            } else return message.channel.send(`${message.member.displayName}, please wait **${Math.ceil(time_left.toFixed(1))}** more second(s) to use the \`${prefix}${command.name}\` command again.`)
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
    if (command.name = "steal") {
        if(!args[0] || !message.mentions.members.first() || message.mentions.users.first().bot || message.mentions.members.first().id == message.author.id || !targetData) time_stamps.delete(message.author.id), 900000;
    };

    try {
        command.execute(message, args, cmd, client, Discord, profileData, targetData);
    } catch (err) {
        message.reply("There was an error trying to execute this command!");
        console.log(err);
    }

}