const prefix = process.env.PREFIX;
module.exports = {
    name: 'schelp',
    permissions: [],
    description: "displays current shortcuts!",
    execute(message, args, cmd, client, Discord) {
        message.channel.send(`**Command shortcuts list**\n\nCurrent altenative inputs are as follows;\n\n`
            + `${prefix}roll # - ${prefix}r #\n`
            + `${prefix}balance - ${prefix}bal **or** ${prefix}bl\n`
            + `${prefix}deposit # - ${prefix}dep #\n`
            + `${prefix}withdraw # - ${prefix}wd #\n`
            + `${prefix}give @user # - ${prefix}gift @user #\n`
            + `${prefix}shop - ${prefix}store **or** ${prefix}buy #\n`
            + `${prefix}bag - ${prefix}inventory **or** ${prefix}inv #\n`
            + `${prefix}leader - ${prefix}board **or** ${prefix}lb\n`
            + `${prefix}expleader - ${prefix}expboard **or** ${prefix}explb\n`
            + `\n**Moderator Commands**\n${prefix}clear # - ${prefix}delete # **or** ${prefix}cl #\n`
            + `${prefix}admingive @user # - ${prefix}admingift @user #`);
    }
}