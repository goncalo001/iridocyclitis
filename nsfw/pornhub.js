const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");


module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("É necessário estar num canal de nsfw para poder usar este comando.").then(m => m.delete(2000));

    args = message.content.split(" ").slice(1);

    if(args.length === 0) return message.channel.send("É necessário introduzir um termo de pesquisa.").then(m => m.delete(2000));

    const Pornsearch = require("pornsearch");

    try {
      const Searcher = new Pornsearch(args.join(" "), 'sex');

      const gifs = await Searcher.gifs();

      const result = Math.floor(Math.random() * gifs.length);

      const { url } = gifs[result - 1];

      let embed = new Discord.RichEmbed()
      .setColor(cores.azul)
      .setImage(url)
      .setURL(url)
      .setAuthor(url)

      message.channel.send(embed)

    } catch(error) {
      console.error(error);
    }          
    
}


   

  



module.exports.config = {
    name: "pornhub",
    description: "pesquisa pornografia direta do pornhub.",
    usage: "! + pornhub + (termo de pesquisa).",
    aliases: ["ph", "porn"],
    accessablelby: "Membros"
}