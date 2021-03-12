// const profileModel = require("../models/profileSchema");
// module.exports = {
//     name: "shop",
//     aliases: ["sp"],
//     permissions: [],
//     description: "Access the shop",
//     async execute(message, args, cmd, client, Discord, profileData) {
//         const amount = args[0];
//         if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withraw must be a whole number");
//         try {
//             if (amount > profileData.wallet) return message.channel.send(`You don't have enough coins in your wallet to purchase that item.`)
//             await profileModel.findOneAndUpdate(
//                 {
//                     userID: message.author.id
//                 }, {
//                 $inc: {
//                     coins: -amount,
//                 },
//             }
//             );

//             return message.channel.send(`You spent **${amount}** coins from your wallet to purchase that items`)
//         } catch (err) {
//             console.log(err);
//         }
//     },
// };