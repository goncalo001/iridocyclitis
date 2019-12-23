const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ytdl = require("ytdl-core");
const opusscript = require('opusscript');


module.exports.run = async (bot, message, args) => {

	if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**❌ Não tem permissão para usar este comando. ❌**").then(m => m.delete(2000));
  
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
  });
  let embed = new Discord.RichEmbed()
  .setColor(cores.azul)
  .setThumbnail(bot.user.displayAvatarURL)
  .addField(`**🔓 Canal desbloqueado**`,`Este canal foi desbloquedao por: **${message.author}**.`)
  
  message.channel.send(embed)
	
	
}	

  



module.exports.config = {
    name: "desbloquearcanal",
    description: "para desbloquear um canal previamente bloqueado.",
    usage: "! + desbloquearcanal",
    aliases: ["desbqcanal"],
    accessablelby: "Membros"
}