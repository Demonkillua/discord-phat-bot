const profileModel = require("../models/profileSchema");
module.exports = {
  name: "beg",
  aliases: [],
  permissions: [],
  cooldown: 7200,
  description: "beg for coins",
  async execute(message, args, cmd, client, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
        serverID: message.guild.id,
      },
      {
        $inc: {
          coins: randomNumber,
          totalCoins: randomNumber,
        },
      }
    );
    return message.channel.send(`**${message.member.displayName}**, you begged and received **${randomNumber}** coins`);
  },
};