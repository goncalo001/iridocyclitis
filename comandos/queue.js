const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");




module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);

    if(!queue) return [message.delete(), message.channel.send(`Não existem músicas a serem reproduzidas.`).then(m => m.delete(2000))];

    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription(`**-=- Queue de Músicas -=-**\n${queue.musics.map(music => `**-** ${music.title}`).join('\n')}\n\n🎶 **A reproduzir:** ${queue.musics[0].title} 🎶`)


    message.channel.send(embed)
}

    
    
   
    


module.exports.config = {
    name: "queue",
    description: "envia uma lista de músicas que foram introduzidas.",
    usage: "! + queue",
    aliases: ["lista", "musicas"],
    accessablelby: "Membros"
}