const { Client } = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args, ops) => {
    args = message.content.slice(16);
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

    if(!args) return message.channel.send("É necessário dar um nome ao canal para eu criar.").then(m => m.delete(2000));

    message.guild.createChannel(`${args}`, {type: 'text' }).then(channel => {
        channel.setTopic(`Canal de teste.`)
        
        

    })
    message.channel.send(`O canal de texto ${args} foi criado.`).then(m => m.delete(2000));


    
}

module.exports.config = {
    name: "criarcanaltexto",
    description: "para criar um canal de texto.",
    usage: "! + criarcanaltexto + (nome do canal)",
    aliases: ["crct"],
    accessablelby: "Administrador"
}