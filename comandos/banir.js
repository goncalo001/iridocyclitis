const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

    let banMember = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!banMember) return message.channel.send("É necessário fornecer o nome de um usuário para ser banido.").then(m => m.delete(2000));

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "Não foi explicitada uma razão."

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Não tenho permissão para usar este comando.").then(m => m.delete(2000));
    
    message.delete()

    banMember.send(`Olá, foste banido dos ${message.guild.name} por: ${reason}`).then (() => 
    message.guild.ban(banMember, { days: 1, reason: reason})).catch(err => console.log(err))

    message.channel.send(`**${banMember.user.tag}** foi banido`).then(m => m.delete(2000))

    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderação:", "banir")
    .addField("Banido:", banMember.user.tag)
    .addField("Administrador:", message.author.username)
    .addField("Razão", reason)
    .addField("Data:", message.createdAt.toLocaleString())
    .setFooter(`iridocyclitis`, bot.user.displayAvatarURL)

    let sChannel = message.guild.channels.find(c => c.name === "modlogs")
    sChannel.send(embed)
    



    
}    



module.exports.config = {
    name: "banir",
    description: "bane um usuário do servidor",
    usage: "! + banir + (razão)",
    aliases: ["ban", "b"],
    accessablelby: "Administrador"
}