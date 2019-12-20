const { Client } = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args, ops) => {
  
    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

    const fetchedRole = message.guild.roles.find(role => role.name === args.join(" "));

    if(!args[0]) return message.channel.send("É necessário dar um nome de um canal para eu apagar.").then(m => m.delete(2000));

    fetchedRole.delete();

    message.channel.send(`O cargo ${fetchedRole.name} foi apagado.`).then(m => m.delete(2000));

        
        
        

    


    
}

module.exports.config = {
    name: "apagarcargo",
    description: "para apagar um cargo existente no servidor.",
    usage: "! + apagarcargo + (nome do cargo)",
    aliases: ["apgcg"],
    accessablelby: "Administrador"
}