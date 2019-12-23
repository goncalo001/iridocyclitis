const { Client } = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ytdl = require("ytdl-core");
const opusscript = require("opusscript");


module.exports.run = async (bot, message, args) => {

    if(!message.member.voiceChannel) return message.channel.send("É necessário conectar-se a um canal de voz para poder parar música.").then(m => m.delete(2000));

    if(!message.guild.me.voiceChannel) return message.channel.send("Não me encontro num canal de voz.").then(m => m.delete(2000));

    if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Não nos encontramos no mesmo canal de voz.").then(m => m.delete(2000));

    message.guild.me.voiceChannel.leave();

    message.channel.send("🎶 A parar a reprodução 🎶 ...").then(m => m.delete(2000));

    
}

module.exports.config = {
    name: "parar",
    description: "para parar uma música que esteja a ser reproduzida.",
    usage: "! + parar",
    aliases: ["pr"],
    accessablelby: "Membros"
}