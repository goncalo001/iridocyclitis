const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ytdl = require("ytdl-core");
const opusscript = require('opusscript');


module.exports.run = async (bot, message, args) => {

	if(!message.member.voiceChannel) return message.channel.send("É necessário conectar-se a um canal de voz para poder ouvir música.").then(m => m.delete(2000));

	if(message.guild.me.voiceChannel) return message.channel.send("Já me encontro num canal de voz.").then(m => m.delete(2000));

	if(!args[0]) return message.channel.send("É necessário introduzir um link.").then(m => m.delete(2000));

	let validate = await ytdl.validateURL(args[0]);

	if(!validate) return message.channel.send("Ocorreu um erro! Tente outra vez.").then(m => m.delete(2000))

	let info = await ytdl.getInfo(args[0]);

	let connection = await message.member.voiceChannel.join();

	let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly' }));

	let embed = new Discord.RichEmbed()
	.setColor(cores.azul)
	.setThumbnail(bot.user.displayAvatarURL)
	.setDescription(`🎶 A reproduzir: **${info.title}** 🎶`)

	message.channel.send(embed)
	
	
}	

  



module.exports.config = {
    name: "play",
    description: "para reproduzir um áudio correspondente a um link do youtube",
    usage: "! + play + (link)",
    aliases: ["pl"],
    accessablelby: "Membros"
}