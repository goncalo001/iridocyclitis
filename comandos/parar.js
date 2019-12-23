const { Client } = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ytdl = require("ytdl-core");
const opusscript = require("opusscript");


module.exports.run = async (bot, message, args, ops) => {
    let queue = bot.queue.get(message.guild.id);

    if(!message.member.voiceChannel) return [message.delete(), message.channel.send(`É necessário juntar-se a um canal de voz para poder usar este comando.`).then(m => m.delete(2000))];

    if(!queue) return [message.delete(), message.channel.send(`Não existem músicas a serem reproduzidas`).then(m => m.delete(2000))];

    queue.musics = [];
    queue.connection.dispatcher.end();

    
}

module.exports.config = {
    name: "parar",
    description: "para parar uma música que esteja a ser reproduzida.",
    usage: "! + parar",
    aliases: ["pr"],
    accessablelby: "Membros"
}