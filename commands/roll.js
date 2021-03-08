const prefix = process.env.PREFIX;
module.exports = {
    name: "roll",
    aliases: ["r"],
    permissions: [],
    description: "Roll a dice!",
    async execute(message, args, cmd, client, Discord, profileData) {
        const randomNumber = Math.floor(Math.random() * args[0]) + 1;
        const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.username}!`)
            .setURL('')
            .setDescription(`You rolled a ${args[0]} sided dice!`)
            .addFields(
                { name: 'Results', value: `**${randomNumber}**` }
            )
            .setImage('')
            .setFooter(`Roll with ${prefix}roll`);

        if (!args[0]) return message.reply("Please enter a number");
        if (isNaN(args[0])) return message.reply("Please enter a valid number");
        return message.channel.send(newEmbed);
    },
  };