const { Util } = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ytdl = require("ytdl-core");
const ytdlDiscord = require('ytdl-core-discord');


const opusscript = require("opusscript");




module.exports.run = async (bot, message, args) => {

    if(!message.member.voiceChannel) return message.channel.send("É necessário que se conecte a um canal de voz.").then(m => m.delete(2000));

    if(message.guild.me.voiceChannel) return message.channel.send("Já me encontro num canal de voz.").then(m => m.delete(2000));
    
    const serverQueue = message.bot.queue.get(message.guild.id);
		const songInfo = await ytdl.getInfo(args[0]);
		const song = {
			id: songInfo.video_id,
			title: Util.escapeMarkdown(songInfo.title),
			url: songInfo.video_url
		};

		if (serverQueue) {
			serverQueue.songs.push(song);
			console.log(serverQueue.songs);
			return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
		}

		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel,
			connection: null,
			songs: [],
			volume: 2,
			playing: true
		};
		message.bot.queue.set(message.guild.id, queueConstruct);
		queueConstruct.songs.push(song);

		const play = async song => {
			const queue = message.bot.queue.get(message.guild.id);
			if (!song) {
				queue.voiceChannel.leave();
				message.bot.queue.delete(message.guild.id);
				return;
			}

			const dispatcher = queue.connection.playOpusStream(await ytdlDiscord(song.url), { passes: 3 })
				.on('end', reason => {
					if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
					else console.log(reason);
					queue.songs.shift();
					play(queue.songs[0]);
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(queue.volume / 5);
			queue.textChannel.send(`🎶 Start playing: **${song.title}**`);
		};

		try {
			const connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			message.bot.queue.delete(message.guild.id);
			await voiceChannel.leave();
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
}

module.exports.config = {
    name: "play",
    description: "para reproduzir um áudio correspondente a um link do youtube",
    usage: "! + play + (link)",
    aliases: ["pl"],
    accessablelby: "Membros"
}