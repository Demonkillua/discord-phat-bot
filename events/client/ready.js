const prefix = process.env.PREFIX;
module.exports = (Discord, client) => {
    console.log('Phat Bot is Online!');

    client.user.setActivity(`for ${prefix}help`, { type: 'WATCHING' })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
}