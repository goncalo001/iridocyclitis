const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ytdl = require("ytdl-core");
const opusscript = require('opusscript');


module.exports.run = async (bot, message, args) => {
	let vc = message.members.voiceChannel()
	if(!vc) return [message.delete(), message.channel.send('É necessário conectar-se a um canal de voz para poder ouvir música.').then(m => m.delete(2000))];

	let url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
	let pl = /^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/

	let searchString = args.join(' ');
	if(!url || !searchString) return [message.delete(), message.channel.send("É necessário introduzir um link válido.").then(m => m.delete(2000))];

	if(url.match(pl)) {
		let playlist = await bot.youtube.getPlaylist(url);
		let videos = await playlist.getVideos();

		for (const vid of Object.values(videos)) {
			let video = await bot.youtube.getVideoByID(vid.id)

			await bot.handleVideo(video, message, vc, true)

		}

		return message.channel.send(`A 🎶 ${playlist.title} 🎶 foi adicionada ao queue.`).then(m => m.delete(2000));

	} else {

	try {
		var video = await bot.youtube.getVideo(url)
	} catch {
		if (err) undefined;
		try {
			var vid = await bot.youtube.searchVideos(searchString, 1)
			var video = await bot.youtube.getVideoByID(vid[0].id);
		} catch (err) {
			console.error(err)
			return [message.delete(), message.channel.send(`Não foram encontrados resultados para ${searchString}.`).then(m => m.delete(2000))];
		}

		return bot.handleVideo(video, message, vc);
	}
	
	}
 
	  
}

        bot.handleVideo = async (video, message, vc, playlist = false) => {
			let queue = bot.queue.get(message.guild.id)
			let music = {
				id: video.id,
				title: video.title,
				url: `https://www.youtube.com/watch?v=${video.id}`
			};

			if(!queue) {
				let queueConstruct = {
					textChannel: message.channel,
					voiceChannel: vc,
					connection: null,
					musics: [],
					volume: 50,
					playing: true
				}

				bot.queue.set(message.guild.id, queueConstruct);
				queueConstruct.musics.push(music)

				try {
					var connection = await vc.join();
					queueConstruct.connection = connection;
					bot.play(message.guild, queueConstruct.musics[0]);
					



				} catch (err) {
					bot.queue.delete(message.guild.id);
					console.error(`Não me consegui conectar ao canal de voz ${err}`);

				}
			} else {
				queue.musics.push(music);
				if(playlist) return;
				else return message.channel.send(`🎶 **${musice.title}** foi adicionada ao queue.`);
			}
			return;

		}
		
		bot.play = (guild, music) => {
			let queue = bot.queue.get(message.guild.id);

			if(!music) {
				queue.voiceChannel.leave();
				bot.queue.delete(guild.id);
				return queue.textChannel.send(`🎶 A música acabou. 🎶`);
			}

			let dispatcher = queue.connection.playStream(ytdl(music.url))
			.on('end', () => {
				queue.musics.shift();
				setTimeout(() => {
					bot.play(guild, queue.musics[0]);


				}, 250);

			})
			.on('error', err => console.error(err));
			dispatcher.setVolumeLogarithmic(queue.volume / 100);

			queue.textChannel.send(`🎶 A reproduzir: **${music.title}** 🎶`);
		}
	
	

  



module.exports.config = {
    name: "play",
    description: "para reproduzir um áudio correspondente a um link do youtube",
    usage: "! + play + (link)",
    aliases: ["pl"],
    accessablelby: "Membros"
}