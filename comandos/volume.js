const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");




module.exports.run = async (bot, message, args) => {
    let queue = bot.queue.get(message.guild.id);

    if(!queue) return [message.delete(), message.channel.send(`Não existem músicas a serem reproduzidas`).then(m => m.delete(2000))];

    if(isNan(args[0])) return [message.delete(), message.channel.send(`É necessário introduzir um valor entre 0 e 100 para regular o volume.`).then(m => m.delete(2000))];

    if(args[0] < 0 || args[0] > 100) return [message.delete(), message.channel.send(`É necessário introduzir um valor entre 0 e 100 para regular o volume.`).then(m => m.delete(2000))];


    if(!args[0]) return [message.delete(), message.channel.send(`🎶 Volume: **${queue.volume}/100** 🎶`)];

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return message.channel.send(`🎶 O volume foi regulado para: **${queue.volume}/100** 🎶`);


}

    
    
   
    


module.exports.config = {
    name: "volume",
    description: "para regular o volume de uma música.",
    usage: "! + volume + (número de 1 a 100)",
    aliases: ["vol", "som"],
    accessablelby: "Membros"
}