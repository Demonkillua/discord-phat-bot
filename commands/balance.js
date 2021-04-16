const prefix = process.env.PREFIX;
module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Check the user balance",
    execute(message, args, cmd, client, Discord, profileData, profileDataTarget) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#32a852')
            .setThumbnail(`${message.author.displayAvatarURL()}`)
            .setTitle(`${message.member.displayName}`)
            .setURL('')
            .setDescription('')
            .addFields(
                { name: 'Wallet: ', value: `${profileData.coins}` },
                { name: 'Bank: ', value: `${profileData.bank}` }
            )
            .setImage(``)
            .setFooter(`Find your balance with ${prefix}balance or ${prefix}bal`);

        message.channel.send(newEmbed);
        message.delete();
    }
}