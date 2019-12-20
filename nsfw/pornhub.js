const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args) => {
    const query = args.join(' ')
    if (!query) return message.channel.send("É necessário introduzir um termo de pesquisa.").then(m => m.delete(2000));
    if (!message.channel.nsfw) return message.channel.send("É necessário que esteja num canal nsfw para poder usar este comando.").then(m => m.delete(2000));
    const Pornsearch = require('pornsearch').search(query);
        Pornsearch.gifs(1)
            .then(gifs => {
                let gifrnd = gifs.map(gif => gif.url)
                let embed = new Discord.RichEmbed()
                    .setColor(cores.azul)
                    .setImage(gifrnd[Math.floor(Math.random() * gifrnd.length)])
                message.channel.send({
                    embed: embed
                })
            })
    
}


   

  



module.exports.config = {
    name: "pornhub",
    description: "pesquisa pornografia direta do pornhub.",
    usage: "! + pornhub + (termo de pesquisa).",
    aliases: ["ph", "porn"],
    accessablelby: "Membros"
}