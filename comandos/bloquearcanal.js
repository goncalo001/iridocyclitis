const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ytdl = require("ytdl-core");
const opusscript = require('opusscript');


module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Não tem permissão para usar este comando. ❌**").then(m => m.delete(2000));
    
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
  });
  
  let embed = new Discord.RichEmbed()
  .setColor(cores.azul)
  .setThumbnail(bot.user.displayAvatarURL)
  .addField(`**🔒 Canal bloqueado**`,`Este canal foi bloqueado por: **${message.author}**.`)

  message.channel.send(embed)
  
  


	
	
}	

  



module.exports.config = {
    name: "bloquearcanal",
    description: "para bloquear o canal onde se situa.",
    usage: "! + bloquearcanal",
    aliases: ["bqcanal"],
    accessablelby: "Membros"
}