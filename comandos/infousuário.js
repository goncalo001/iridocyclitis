const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const moment = require("moment")


module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;

    if(!user) return message.channel.send("É necessário fornecer um nome de um usuário.").then(m => m.delete(2000));

 
    let uEmbed = new Discord.RichEmbed()
    .setThumbnail(user.displayAvatarURL)
    .setTitle("**Info do usuário**")
    .setColor(cores.azul)
    .addField("**Nome do Usuário:**", user.username + "#" + user.discriminator, true)
    .addField("**ID:**", user.id, true)
    .addField("**Bot:**", "iridocyclitis", true)
    .addField("**Status:**", `${user.presence.status}`, true)
    .addField("**Juntou-se ao discord em:**", moment(user.joinedAt).format("MMMM Do YYYY, h:mm a"))
    .addField("**A jogar:**", `${user.presence.game ? user.presence.game.name : 'Esse usuário não está a jogar no momento.'}`, true)
    .setFooter(`iridocyclitis`, bot.user.displayAvatarURL)
    message.channel.send({embed: uEmbed});
}    



module.exports.config = {
    name: "infousuário",
    description: "para receber informações de um determinado usuário",
    usage: "! + infousuário",
    aliases: ["iu", "descriçãousuar"],
    accessablelby: "Administrador"
}