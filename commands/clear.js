module.exports = {
    name: 'clear',
    aliases: ['cl', 'delete'],
    permissions: ["MANAGE_MESSAGES"],
    description: "Clear messages!",
    async execute(message, args, cmd, client, Discord) {
        if (!args[0]) return message.reply("please enter the amount of messages you wish to clear.");
        if (isNaN(args[0])) return message.reply("please enter a valid number.");

        if (args[0] > 100) return message.reply("you can not delete more than 100 messages.");
        if (args[0] < 1) return message.reply("messages to delete cannot be less than 1");

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}