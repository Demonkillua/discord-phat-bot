// const profileModel = require("../models/profileSchema");
// module.exports = {
//     name: "test",
//     aliases: [],
//     permissions: [],
//     cooldown: 0,
//     description: "This is a test command",
//     async execute(message, args, cmd, client, Discord, profileData) {
//         const target = message.mentions.users.first();
//         const memberTarget = message.guild.members.cache.get(target.id);

//         let targetData;
//         try {
//             targetData = await profileModel.findOne({ userID: memberTarget.user.id });
//             if (!profileData) {
//                 let profile = await profileModel.create({
//                     userID: message.author.id,
//                     serverID: message.guild.id,
//                     coins: 1000,
//                     bank: 0,
//                 });
//             }
//         } catch (err) {
//             console.log(err)
//         }

//         const targetWallet = targetData.coins;
//         if (!target) {
//             return message.channel.send('No target mentioned')

//         } else {
//             return message.channel.send(`Target has ${targetWallet} coins`)
//         }
//     }
// }