// const profileModel = require("../models/profileSchema");
// module.exports = {
//     name: "test",
//     aliases: [],
//     permissions: [],
//     cooldown: 0,
//     description: "This is a test command",
//     async execute(message, args, cmd, client, Discord, profileData, targetData) {
//         const target = message.mentions.users.first();
//         const memberTarget = message.guild.members.cache.get(target.id);

//         const targetWallet = await targetData.coins;
//         if (!target) {
//             return message.channel.send('No target mentioned')

//         } else {
//             return message.channel.send(`Target (${message.guild.members.cache.get(message.mentions.users.first().id).id}) has ${targetWallet} coins`)
//         }
//     }
// }