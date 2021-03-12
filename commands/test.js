const profileModel = require("../models/profileSchema");
module.exports = {
    name: "test",
    aliases: [],
    permissions: [],
    cooldown: 0,
    description: "This is a test command",
    async execute(message, args, cmd, client, Discord, profileData) {
        const chance = Math.floor(Math.random() * 100) + 1;
        message.channel.send(`${chance}`);
    }
}