const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args) => {
    if(message.deletable) {
        message.delete();
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Não tens permissão para usar este comando.").then(m => m.delete(2000));

    }

    if(isNaN(args[0]) || args[0] <= 0) {
       return message.channel.send("Por favor insira um número que seja superior a 0.").then(m => m.delete(2000));
    }

    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Não tenho permissão para usar este comando.").then(m => m.delete(2000));
    }

  

    if(args[0] > 100) {
        return message.channel.send("Só posso apagar no máximo 100 mensagens.").then(m => m.delete(2000));
    }

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Feito! Apaguei ${args[0]} mensagens com sucesso.`).then(m => m.delete(1000));
       
    }) 
  
   
}    



module.exports.config = {
    name: "limpar",
    description: "para apagar um determinado número de mensagens",
    usage: "! + limpar + (número de mensagens)",
    aliases: ["l", "limp"],
    accessablelby: "Membros"
}