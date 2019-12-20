const { Client } = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args, ops) => {
  
    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

    var args = message.content.split(" ");
    
    args.shift();

    message.guild.createRole({
        name: args[0],
        color: args[1]
    })
    .then(role => {
        console.log("O cargo foi criado.")
        message.channel.send(`O cargo ${role.name} foi criado.`).then(m => m.delete(2000))
   
    })
    .catch(err => console.log(err));
    

   
        
        
        

    


    
}

module.exports.config = {
    name: "criarcargo",
    description: "para criar um cargo.",
    usage: "! + criarcargo + (nome do cargo(opcional)) + (cor do cargo(opcional))",
    aliases: ["crcg"],
    accessablelby: "Administrador"
}