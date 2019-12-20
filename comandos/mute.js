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
if(!muterole) {
    try{
        muterole = await message.guild.createRole({
            name: "silenciados",
            color: "#514f48",
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SEND_TTS_MESSAGES: false,
                ATTACH_FILES: false,
                SPEAK: false
            })
        })       
    }catch(e) {
        console.log(e.stack);
    }
}


mutee.addRole(muterole.id).then(() => {
    message.delete()
    mutee.send(`Olá, foste silenciado nos ${message.guild.name} por: ${reason}`)
    message.channel.send(`**${mutee.user.tag}** foi silenciado com sucesso.`).then(m => m.delete(2000))
})

let embed = new Discord.RichEmbed()
.setColor(cores.azul)
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderação:", "mute")
.addField("Silenciado:", mutee.user.tag)
.addField("Administrador:", message.author.username)
.addField("Razão", reason)
.addField("Data:", message.createdAt.toLocaleString())

let sChannel = message.guild.channels.find(c => c.name === "modlogs")
sChannel.send(embed)
    
}


module.exports.config = {
    name: "mute",
    description: "silencia um usuário",
    usage: "! + mute + razão",
    aliases: ["mu", "silenciar"],
    accessablelby: "Administrador"
}