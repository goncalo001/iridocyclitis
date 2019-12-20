const Discord = require("discord.js");
const cores = require("../cores.json");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {

    let killed = message.mentions.members.first()
    if(!killed) {

    let img = "https://i.imgur.com/mm4PTMX.jpg"
    
    let memb = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setThumbnail(message.author.displayAvatarURL)
    .setImage(img)
    .setDescription(`${message.author} decidiu suicidar-se 💔 descanse em paz...`)
    .addField("Data da morte:", message.createdAt.toLocaleString())
    
    message.channel.send(memb)
    
    } else {
    
    let img = "https://i.imgur.com/mm4PTMX.jpg"    
    let emb = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setThumbnail(killed.user.displayAvatarURL)
    .setDescription(`${killed} foi morto por ${message.author} 💔 descanse em paz...`)
    .setImage(img)
    .addField("Data da morte:", message.createdAt.toLocaleString())
    
    message.channel.send(emb)
    
    
    }
        
    
}
  
   




module.exports.config = {
    name: "matar",
    description: "para matares qualquer pessoa do server.",
    usage: "! + matar + (nome do usuário) ou ! + matar",
    aliases: ["m", "mt"],
    accessablelby: "Membros"
}