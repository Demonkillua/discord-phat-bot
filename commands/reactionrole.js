// module.exports = {
//     name: 'reactionrole',
//     permissions: [],
//     description: "react to assign user roll",
//     async execute(message, args, cmd, client, Discord) {
//         const channel = '809589095394705420'
//         const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Yellow Team");
//         const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Blue Team");
//         const yellowTeamEmoji = ':yellow_square:'
//         const blueTeamEmoji = ':blue_circle:'

//         let embed = new Discord.MessageEmbed()
//         .setColor('RANDOM')
//         .setTitle('Choose a team to play on!')
//         .setDescription ('Choosing a team will allow you to interact with your teammates!\n\n'
//             + `${yellowTeamEmoji} for yellow team\n`
//             + `${blueTeamEmoji} for blue team`);
        
//         let messageEmbed = await message.channel.send(embed);
//         messageEmbed.react(yellowTeamEmoji);
//         messageEmbed.react(blueTeamEmoji);

//         client.on('messageReactionAdd', async (reaction, user) => {
//             if (reaction.message.partial) await reaction.message.fetch();
//             if (reaction.partial) await reaction.fetch();
//             if (user.bot) return;
//             if (!reaction.message.guild) return;

//             if (reaction.message.channel.id == channel) {
//                 if (reaction.emoji.name == yellowTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
//                     if (blueTeamRole) {
//                         await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
//                     }
//                 }
//                 if (reaction.emoji.name == blueTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
//                     if (yellowTeamRole) {
//                         await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
//                     }
//                 }
//             } else {
//                 return;
//             }
//         });

//         client.on('messageReactionRemove', async (reaction, user) => {
//             if (reaction.message.partial) await reaction.message.fetch();
//             if (reaction.partial) await reaction.fetch();
//             if (user.bot) return;
//             if (!reaction.message.guild) return;

//             if (reaction.message.channel.id == channel) {
//                 if (reaction.emoji.name == yellowTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
//                 }
//                 if (reaction.emoji.name == blueTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
//                 }
//             } else {
//                 return;
//             }
//         });
//     }
// }