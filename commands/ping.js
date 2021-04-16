module.exports = {
    name: 'ping',
    permissions: [],
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Pong!')
            .setAuthor(`${message.member.displayName}`, `${message.author.displayAvatarURL()}`, '')
            .setColor('RANDOM')
            .setDescription(`Latency is ${Date.now() - message.createdTimestamp}ms. 
            API Latency is ${Math.round(client.ws.ping)}ms`);

        message.channel.send(embed);
        message.delete();
    }
}