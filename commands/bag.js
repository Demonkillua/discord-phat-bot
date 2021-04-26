const profileModel = require("../models/profileSchema");
const prefix = process.env.PREFIX;
module.exports = {
    name: "bag",
    aliases: ["inv", "inventory"],
    permissions: [],
    description: "view your inventory",
    async execute(message, args, cmd, client, Discord, profileData, targetData) {
        if (profileData.inventory.bag[0] === null) profileData.inventory.bag[0] = "Empty"

        let newEmbed = new Discord.MessageEmbed()
            .setTitle("Bag")
            .setColor('B5872C')
            .setAuthor(`${message.member.displayName}`, `${message.author.displayAvatarURL()}`, '')
            .setFooter(`Find with ${prefix}bag or ${prefix}inventory or ${prefix}inv`)
        if (profileData.inventory.bag.length === 0) {
            newEmbed.addField("Empty", "You currently have no items!")
        } else if (profileData.inventory.bag.length < 12) {
            if (profileData.inventory.bag[0] === null) profileData.inventory.bag[0] = "Empty";
            for (i = 0; i < profileData.inventory.bag.length; i++) {
                newEmbed.addField(`Slot ${i + 1}`, `${profileData.inventory.bag[i]}`);
            }
        } else {
            for (i = 0; i < 12; i++) {
                newEmbed.addField(`Slot ${i + 1}`, `${profileData.inventory.bag[i]}`);
            }
        }

        message.channel.send(newEmbed);
        message.delete()
    }
}