const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const superagent = require("superagent");
const Pornsearch = require('pornsearch')

module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("É necessário estar num canal de nsfw para poder usar este comando.")
    const query = args.join(' ')
    if (!query) return message.channel.send("É necessário introduzir um termo de pesquisa.")
    
    const Searcher = new Pornsearch(driver = 'pornhub');
        Pornsearch.search(query)
        Searcher.gifs(1)
            .then(gifs => {
                let gifrnd = gifs.map(gif => gif.url)
                console.log(gifrnd)
                let embed = new Discord.RichEmbed()
                .setImage(gifrnd[Math.floor(Math.random() * gifrnd.length)])
                .setColor(cores.azul)
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