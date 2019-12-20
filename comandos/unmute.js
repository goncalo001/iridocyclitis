const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args) => {
  
if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Não tenho permissão para dar cargos.").then(m => m.delete(2000));


let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
if(!mutee) return message.channel.send("É necessário fornecer o nome de um usuário para ser silenciado.").then(m => m.delete(2000));

let reason = args.slice(1).join(" ");
if(!reason) reason = "Não foi explicitada uma razão"

let muterole = message.guild.roles.find(r => r.name === "silenciados")
if(!muterole) return message.channel.send("Não há cargo silenciados para ser removido.").then(m => m.delete(2000));

mutee.removeRole(muterole.id).then(() => {
    message.delete()
    mutee.send(`Olá, deixou destar silenciado nos ${message.guild.name} por: ${reason}`).catch(err => console.log(err))
    message.channel.send(`**${mutee.user.tag}** deixou de estar silenciado.`).then(m => m.delete(2000))
})

let embed = new Discord.RichEmbed()
.setColor(cores.azul)
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderação:", "unmute")
.addField("Silenciado:", mutee.user.username)
.addField("Administrador:", message.author.tag)
.addField("Razão", reason)
.addField("Data:", message.createdAt.toLocaleString())
.setFooter(`iridocyclitis`, bot.user.displayAvatarURL)

let sChannel = message.guild.channels.find(c => c.name === "modlogs")
sChannel.send(embed)





}    



module.exports.config = {
    name: "unmute",
    description: "remove o cargo de silenciado do usuário",
    usage: "! + unmute + (razão)",
    aliases: ["um", "desilenciar"],
    accessablelby: "Administrador"
}