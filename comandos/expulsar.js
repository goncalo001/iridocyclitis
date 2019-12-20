const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!kickMember) return message.channel.send("É necessário fornecer o nome de um usuário para ser expulso.").then(m => m.delete(2000));

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Não foi especificada uma razão"

    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Não tenho permissão para usar este comando.").then(m => m.delete(2000));

    kickMember.send(`Olá foste expulso dos ${message.guild.name} por: ${reason}`).then(() => 
    kickMember.kick(reason)).catch(err => console.log(err))

    message.channel.send(`**${kickMember.user.tag}** foi expulso`).then(m => m.delete(2000))

    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderação:", "expulsar")
    .addField("Expulso:", kickMember.user.tag)
    .addField("Administrador:", message.author.username)
    .addField("Razão", reason)
    .addField("Data:", message.createdAt.toLocaleString())
    .setFooter(`iridocyclitis`, bot.user.displayAvatarURL)

    let sChannel = message.guild.channels.find(c => c.name === "modlogs")
    sChannel.send(embed)
    
}    



module.exports.config = {
    name: "expulsar",
    description: "expulsa um usuário do servidor",
    usage: "! + expulsar + razão",
    aliases: ["exp", "e"],
    accessablelby: "Administrador"
}