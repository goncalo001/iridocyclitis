const { Client } = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ytdl = require("ytdl-core");
const opusscript = require("opusscript");


module.exports.run = async (bot, message, args) => {
   
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));
    const fetchedChannel = message.guild.channels.find(c => c.name === args.join(" ")) || message.guild.channels.find(c => c.id === args.join(" "));

    if(!args[0]) return message.channel.send("É necessário dar um nome de um canal para eu apagar.").then(m => m.delete(2000));

    fetchedChannel.delete();

    message.channel.send(`O canal ${args} foi apagado.`).then(m => m.delete(2000));

    

      
     
        

    


    
}

module.exports.config = {
    name: "apagarcanal",
    description: "para parar apagar um canal.",
    usage: "! + apagarcanal + (nome do canal)",
    aliases: ["apgcan", "ac"],
    accessablelby: "Administrador"
}