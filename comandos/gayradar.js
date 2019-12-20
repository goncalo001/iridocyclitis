const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args, ops) => {
    let percentage = Math.floor(Math.random() * 100 + 1)

    let image = "https://i.imgur.com/e0mCl4K.png"

    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setThumbnail(image)
    .setTitle("**Gay Radar**")
    .setDescription(`${message.author.tag} és ` + percentage + "% gay.")
    message.channel.send(embed);

    
}

module.exports.config = {
    name: "gayradar",
    description: "para saber quão gay és numa escala de 1 a 100%.",
    usage: "! + gayradar",
    aliases: ["g"],
    accessablelby: "Membros"
}