const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const oneLinerJoke = require("one-liner-joke")

module.exports.run = async (bot, message, args, ops) => {
    var joke = oneLinerJoke.getRandomJoke();
    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setTitle("piada curta")
    .setDescription(joke.body)
    .setThumbnail(bot.user.displayAvatarURL)
    message.channel.send(embed)


    
    
}

module.exports.config = {
    name: "piada",
    description: "envia uma piada curta aleatória.",
    usage: "! + piada",
    aliases: ["pd"],
    accessablelby: "Membros"
}