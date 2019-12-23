const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args, ops) => {
    
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

    let user = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!user) return message.channel.send("É necessário fornecer o nome de um usuário para lhe dar uma alcunha.").then(m => m.delete(2000));

    let nickname = args.slice(1).join(" ");
    if(!nickname) return message.channel.send("É necessário fornecer uma alcunha.").then(m => m.delete(2000));


    user.setNickname(nickname);
    
    await message.delete()
    

    
  
    
}




module.exports.config = {
    name: "nickname",
    description: "para mudares o apelido e alguém",
    usage: "! + nickname + (nome do usuário) + (alcunha)",
    aliases: ["nick"],
    accessablelby: "Membros"
}