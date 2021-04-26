const profileModel = require("../models/profileSchema");
const dailyShopModel = require("../models/dailyShopSchema")
const currencyModel = require("../models/currencySchema"); // 0 - 3
const armorModel = require("../models/armorSchema"); // 4 - 15
const shieldModel = require("../models/shieldSchema"); // 16 - 19
const weaponModel = require("../models/weaponSchema"); // 20 - 71
const gearModel = require("../models/gearSchema"); 
const prefix = process.env.PREFIX;

function getUTCMidnight(dateObj) {
    let date = `${dateObj.getUTCDate()}`.padStart(2, "0");
    let month = `${dateObj.getUTCMonth() + 1}`.padStart(2, "0");
    let year = dateObj.getUTCFullYear();
    return new Date(`${year}-${month}-${date}T00:00:00Z`);
}
  
function getCurrentUTCMidnight() {
    return getUTCMidnight(new Date());
}
module.exports = {
    name: "shop",
    aliases: ["store", "buy"],
    permissions: [],
    description: "Access the shop",
    async execute(message, args, cmd, client, Discord, profileData) { 
        let randomID = [];
        while(randomID.length < 5){
            var r = Math.floor(Math.random() * 67) + 5;
            if(randomID.indexOf(r) === -1) randomID.push(r);
        }
        
        let dailyReset;
        try {
            dailyReset = await dailyShopModel.findOne({ serverID: message.guild.id })
            if(!dailyReset) {
                let profile = await dailyShopModel.create({
                    serverID: message.guild.id,
                    shopID: [
                        randomID[0],
                        randomID[1],
                        randomID[2],
                        randomID[3],
                        randomID[4],
                    ],
                    updatedAt: getCurrentUTCMidnight(),
                });
            }
            const then = new Date(dailyReset.updatedAt)
            const now = getCurrentUTCMidnight()
            const diffTime = Math.abs(now - then)
            const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))
            if (diffDays >= 1) {
                await dailyShopModel.findOneAndUpdate(
                    {
                        serverID: message.guild.id,
                    }, {
                    $set: {
                        shopID: [
                            randomID[0],
                            randomID[1],
                            randomID[2],
                            randomID[3],
                            randomID[4],
                        ],
                        updatedAt: getCurrentUTCMidnight(),
                    },
                }
                );
            } 
        } catch (err) {
            console.log(err);
        }

        let randomItem = [];
        try {
            randomItem[0] = await armorModel.findOne({ itemID: dailyReset.shopID[0] });
            if (!randomItem[0]) randomItem[0] = await shieldModel.findOne({ itemID: dailyReset.shopID[0] });
            if (!randomItem[0]) randomItem[0] = await weaponModel.findOne({ itemID: dailyReset.shopID[0] });
            if (!randomItem[0]) randomItem[0] = await gearModel.findOne({ itemID: dailyReset.shopID[0] });

            randomItem[1] = await armorModel.findOne({ itemID: dailyReset.shopID[1] });
            if (!randomItem[1]) randomItem[1] = await shieldModel.findOne({ itemID: dailyReset.shopID[1] });
            if (!randomItem[1]) randomItem[1] = await weaponModel.findOne({ itemID: dailyReset.shopID[1] });
            if (!randomItem[1]) randomItem[1] = await gearModel.findOne({ itemID: dailyReset.shopID[1] });

            randomItem[2] = await armorModel.findOne({ itemID: dailyReset.shopID[2] });
            if (!randomItem[2]) randomItem[2] = await shieldModel.findOne({ itemID: dailyReset.shopID[2] });
            if (!randomItem[2]) randomItem[2] = await weaponModel.findOne({ itemID: dailyReset.shopID[2] });
            if (!randomItem[2]) randomItem[2] = await gearModel.findOne({ itemID: dailyReset.shopID[2] });

            randomItem[3] = await armorModel.findOne({ itemID: dailyReset.shopID[3] });
            if (!randomItem[3]) randomItem[3] = await shieldModel.findOne({ itemID: dailyReset.shopID[3] });
            if (!randomItem[3]) randomItem[3] = await weaponModel.findOne({ itemID: dailyReset.shopID[3] });
            if (!randomItem[3]) randomItem[3] = await gearModel.findOne({ itemID: dailyReset.shopID[3] });

            randomItem[4] = await armorModel.findOne({ itemID: dailyReset.shopID[4] });
            if (!randomItem[4]) randomItem[4] = await shieldModel.findOne({ itemID: dailyReset.shopID[4] });
            if (!randomItem[4]) randomItem[4] = await weaponModel.findOne({ itemID: dailyReset.shopID[4] });
            if (!randomItem[4]) randomItem[4] = await gearModel.findOne({ itemID: dailyReset.shopID[4] });
        } catch (err) {
            console.log(err);
        }

        const newEmbed = new Discord.MessageEmbed()
            .setColor('PURPLE')
            .setAuthor(`${message.member.displayName}`, `${message.author.displayAvatarURL()}`, '')
            .setTitle('Shop')
            .setDescription('Reply with the name or # of the item you wish to purchase')
            .setFooter(`Find with ${prefix}shop or ${prefix}store or ${prefix}buy\nUpdates daily at 00:00 UTC`)
            .addFields(
                { name: `1 - ${randomItem[0].name}`, value: `${randomItem[0].value} coins` },
                { name: `2 - ${randomItem[1].name}`, value: `${randomItem[1].value} coins` },
                { name: `3 - ${randomItem[2].name}`, value: `${randomItem[2].value} coins` },
                { name: `4 - ${randomItem[3].name}`, value: `${randomItem[3].value} coins` },
                { name: `5 - ${randomItem[4].name}`, value: `${randomItem[4].value} coins` },
            )

        let filter = m => m.author.id === message.author.id
        message.channel.send(newEmbed).then(() => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
            }).then(async message => {
                message = message.first()
                var words = message.content.split(' ');
                let itemCompare;
                if (words.length > 1) itemCompare = `${words[0].slice(0,1).toUpperCase()}` + `${words[0].slice(1).toLowerCase()}` + " " + `${words[1].slice(0,1).toUpperCase()}` + `${words[1].slice(1).toLowerCase()}`;
                else itemCompare = `${message.content.slice(0,1).toUpperCase()}` + `${message.content.slice(1).toLowerCase()}`;
                if (message.content.toString() == "1" || itemCompare == randomItem[0].name) {
                    var item = randomItem[0].name
                    var amount = randomItem[0].value
                } else if (message.content.toString() == "2" || itemCompare == randomItem[1].name) {
                    var item = randomItem[1].name
                    var amount = randomItem[1].value
                } else if (message.content.toString() == "3" || itemCompare == randomItem[2].name) {
                    var item = randomItem[2].name
                    var amount = randomItem[2].value
                } else if (message.content.toString() == "4" || itemCompare == randomItem[3].name) {
                    var item = randomItem[3].name
                    var amount = randomItem[3].value
                } else if (message.content.toString() == "5" || itemCompare == randomItem[4].name) {
                    var item = randomItem[4].name
                    var amount = randomItem[4].value
                } else {
                    return;
                }
                if (profileData.inventory.bag[11]) return message.channel.send("Could not buy, your inventory is currently full")
                if (profileData.inventory.bag.indexOf(item) !== -1) return message.channel.send("Sorry, you can currently have only one of each item in your bag.")
                if (profileData.coins < amount) {
                    return message.channel.send("You do not have enough coins in your wallet to buy that")
                } else try {
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                            serverID: message.guild.id,
                        }, {
                        $inc: {
                            coins: -amount,
                            totalCoins: -amount,
                        },
                        $push: {
                            'inventory.bag': item,
                        },
                    }
                    );
        
                    return message.channel.send(`${item} purchased for **${amount}** coins`);
                } catch (err) {
                    console.log(err)
                }
            }).catch(collected => {
                return;
            });
        })
        message.delete();
    }
}