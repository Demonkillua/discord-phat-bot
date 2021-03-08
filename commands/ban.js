module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    description: "This command bans a member!",
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        } else {
            message.channel.send(`You couldn't ban that member!`);
        }
    }
}