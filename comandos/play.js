const { Util } = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ytdl = require("ytdl-core");


const opusscript = require("opusscript");




module.exports.run = async (bot, message, args, ops) => {

    if(!message.member.voiceChannel) return message.channel.send("É necessário que se conecte a um canal de voz.").then(m => m.delete(2000));

    if(message.guild.me.voiceChannel) return message.channel.send("Já me encontro num canal de voz.").then(m => m.delete(2000));

    if(!args[0]) return message.channel.send("É necessário fornecer um link").then(m => m.delete(2000));
    
    let validate = await ytdl.validateURL(args[0]);

    if(!validate) return message.channel.send("Ocorreu um erro! Tente de novo.").then(m => m.delete(2000));

    let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voiceChannel.join();

    let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly' }));
    
    message.channel.send(` ▶️ A reproduzir: ${info.title}`)
    
}

module.exports.config = {
    name: "play",
    description: "para reproduzir um áudio correspondente a um link do youtube",
    usage: "! + play + (link)",
    aliases: ["pl"],
    accessablelby: "Membros"
}