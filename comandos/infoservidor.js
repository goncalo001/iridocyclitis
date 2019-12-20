const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setTitle("Info do Servidor")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .addField("**Nome do Servidor:**", `${message.guild.name}`, true)
    .addField("**Dono do servidor:**", `${message.guild.owner}`, true)
    .addField("**Contagem de Membros:**", `${message.guild.memberCount}`, true)
    .addField("**Contagem de Cargos:**", `${message.guild.roles.size}`, true)
    .setFooter(`iridocyclitis`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});

}

module.exports.config = {
    name: "infoservidor",
    description: "para receber informações sobre o servidor",
    usage: "! + infousuário",
    aliases: ["is", "descriçãoserv"],
    accessablelby: "Membros"
}