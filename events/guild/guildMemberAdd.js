const profileModel = require("../../models/profileSchema");

module.exports = async (client, Discord, member) => {
    let welcomeRole = member.guild.roles.cache.find(role => role.name === 'Member');

    member.roles.add(welcomeRole);

    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 1000,
        totalCoins: 1000,
        exp: 0,
        bank: 0,
    });
    profile.save();
};