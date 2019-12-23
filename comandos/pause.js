const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");




module.exports.run = async (bot, message, args) => {
    let queue = bot.queue.get(message.guild.id);

    if(queue && queue.playing) {
        queue.playing = false;
        queue.connection.dispatcher.pause();
        return message.channel.send(`🎶 A música foi pausada 🎶`);
    }

    return [message.delete(), message.channel.send(`Não existem músicas a serem reproduzidas`).then(m => m.delete(2000))];





}

    
    
   
    


module.exports.config = {
    name: "pause",
    description: "para pausar uma música que esteja a ser reproduzida.",
    usage: "! + pause",
    aliases: ["p"],
    accessablelby: "Membros"
}