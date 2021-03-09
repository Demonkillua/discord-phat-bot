const prefix = process.env.PREFIX;
module.exports = {
    name: 'help',
    permissions: [],
    description: "displays current commands!",
    execute(message, args, cmd, client, Discord) {
        message.channel.send(`**Start commands with ${prefix}**\nFind shortcuts with ${prefix}schelp\n\nCurrent commands are as follows;\n\n${prefix}help - to access this help.\n${prefix}ping - to ping the bot and make sure it is running.\n${prefix}play *url* - play a youtube video by URL or Keywords in voice channels.\n${prefix}skip - skip to the next queued song.\n${prefix}stop - stop the bot from playing in a voice channel.\n${prefix}roll # - roll a dice. (ex. ${prefix}roll 6)\n${prefix}beg - beg for coins.\n${prefix}balance - find your total of coins.\n${prefix}deposit # - deposit coins to your bank from your wallet.\n${prefix}withdraw # - withdraw coins from your bank into your wallet.\n\n**Moderator Commands**\n${prefix}clear # - to clear 1-100 messages from within the past 12 days.\n${prefix}mute @user - mute a member.\n${prefix}mute @user 1y1d1m1s - mute a member for a set time.\n${prefix}unmute @user - unmute a member.\n${prefix}kick @user - kick a user.\n${prefix}ban @user - ban a user.\n${prefix}give @user # - give a user coins to their wallet. (Admin Only)`);
    }
}
