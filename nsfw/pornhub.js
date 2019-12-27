const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const search = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("É necessário estar num canal de nsfw para poder usar este comando.")

    let key = args[0];
  
      let res = key[Math.floor(Math.random()*key.length)]
      let pornEmbed = new Discord.RichEmbed()
      .setTitle("Porn")
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp()
  
      search(res).then(url => {
        pornEmbed.setImage(url)
        message.channel.send({embed: pornEmbed})
      })
   

            
    
}


   

  



module.exports.config = {
    name: "pornhub",
    description: "pesquisa pornografia direta do pornhub.",
    usage: "! + pornhub + (termo de pesquisa).",
    aliases: ["ph", "porn"],
    accessablelby: "Membros"
}