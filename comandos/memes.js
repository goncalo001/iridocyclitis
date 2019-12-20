const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const randompuppy = require("random-puppy")

module.exports.run = async (bot, message, args) => {
    let subReddits = ["dankmeme", "meme", "me_irl"];
    let random = subReddits[Math.floor(Math.random() * subReddits.length)];
    let image = await randompuppy(random);
    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setImage(image)
    .setTitle(`Vem do /r/${random}`)
    .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);

}    



module.exports.config = {
    name: "memes",
    description: "envia memes através de links de sites",
    usage: "! + memes",
    aliases: ["me", "meme"],
    accessablelby: "Membros"
}