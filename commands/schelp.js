const prefix = process.env.PREFIX;
module.exports = {
    name: 'schelp',
    permissions: [],
    description: "displays current shortcuts!",
    execute(message, args, cmd, client, Discord) {
        message.channel.send(`**Command shortcuts list**\n\nCurrent shortcuts are as follows;\n\n${prefix}image *keywords* - ${prefix}img *keywords*\n${prefix}roll # - ${prefix}r #\n${prefix}balance - ${prefix}bal **or** ${prefix}bl\n${prefix}deposit # - ${prefix}dep #\n${prefix}withdraw # - ${prefix}wd #\n\n**Moderator Commands**\n${prefix}clear # - ${prefix}delete # **or** ${prefix}cl #\n${prefix}give @user # - ${prefix}gift @user #`);
    }
}