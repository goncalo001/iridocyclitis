const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

    let bannedMember = await bot.fetchUser(args[0])
    if(!bannedMember) return message.channel.send("É necessário fornecer o nome de um usuário para ele deixar de estar banido.").then(m => m.delete(2000));

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Não foi explicitada uma razão."
    
    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Não tenho permissão para usar este comando.").then(m => m.delete(2000));
    message.delete()
    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`**${bannedMember.tag}** deixou de estar banido.`).then(m => m.delete(2000))
    }catch(e) {
        console.log(e.message)
    }    

    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderação:", "desbanir")
    .addField("Banido:", `${bannedMember.user.tag}, ${bannedMember.id}`)
    .addField("Administrador:", message.author.username)
    .addField("Razão", reason)
    .addField("Data:", message.createdAt.toLocaleString())
    .setFooter(`iridocyclitis`, bot.user.displayAvatarURL)

    let sChannel = message.guild.channels.find(c => c.name === "modlogs")
    sChannel.send(embed)

    
}    



module.exports.config = {
    name: "desbanir",
    description: "desbane um usuário do servidor",
    usage: "! + desbanir",
    aliases: ["uban", "ub"],
    accessablelby: "Administrador"
}