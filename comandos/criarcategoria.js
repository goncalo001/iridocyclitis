const { Client } = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args, ops) => {
    args = message.content.slice(15);
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

    if(!args) return message.channel.send("É necessário dar um nome à categoria para eu criar.").then(m => m.delete(2000));

    message.guild.createChannel(`${args}`, {type: 'category' })

    message.channel.send(`A categoria ${args} foi criada.`).then(m => m.delete(2000));
        
        

    


    
}

module.exports.config = {
    name: "criarcategoria",
    description: "para criar uma categoria.",
    usage: "! + criarcategoria + (nome da categoria)",
    aliases: ["crc"],
    accessablelby: "Administrador"
}