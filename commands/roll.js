const prefix = process.env.PREFIX;
module.exports = {
    name: "roll",
    aliases: ["r"],
    permissions: [],
    description: "Roll a dice!",
    async execute(message, args, cmd, client, Discord, profileData) {
        var randomNumber = Math.floor(Math.random() * args[0]) + 1;
        const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`, '')
            .setDescription(`You rolled a ${args[0]} sided dice!`)
            .addFields(
                { name: 'Results', value: `**${randomNumber}**` }
            )
            .setFooter(`Roll with ${prefix}roll or ${prefix}r`);

        if (!args[0]) return message.reply("Please enter a number");
        if (isNaN(args[0]) || args[0] % 1 != 0 || args[0] <= 1) return message.reply("Please enter a valid whole number greater than 1");
        message.channel.send(newEmbed);
        message.delete();
    },
}