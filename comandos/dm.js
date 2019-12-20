const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args, ops) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

    if(message.author.bot) return;

    msg = message.content.toLowerCase();

    mention = message.mentions.users.first();

    if(mention == null) return message.channel.send("É necessário dar o nome de um usuário para enviar mensagem.").then(m => m.delete(2000));
    message.delete();
    mentionMessage = message.content.slice(3);
    mention.sendMessage(mentionMessage);
    message.channel.send("Feito.").then(m => m.delete(2000));




    
   

    
}

module.exports.config = {
    name: "dm",
    description: "envia mensagens em privado para usuários que pertençam ao servidor.",
    usage: "! + dm + (usuário) + (mensagem)",
    aliases: ["conv"],
    accessablelby: "Membros"
}