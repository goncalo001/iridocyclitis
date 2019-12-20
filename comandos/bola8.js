const Discord = require("discord.js");
const cores = require("../cores.json");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
   
	if(!args[2]) return message.channel.send("Por favor faz-me perguntas.")
	
	let replies = ['Sim', 'Não', 'Porque é que estás a tentar?', 'O que é que achas?', 'Talvez', 'Nunca', 'Ya', 'Jamais', 'Vai para o caralho!', 'Não contes muito com isso', 'Bem podes esperar sentado', 'Porque é que não te vais sentar numa pila!', 'Asério que perguntas-te isso?', 'Recuso-me a responder a isso', 'Perguntas-me isso porquê', 'Não sei', 'Não me apetece responder', 'Pergunta à tua mãe', 'Certamente', 'Yup', 'Sem comentários' ];

	let result = Math.floor((Math.random() * replies.length));

	let question = args.slice(0).join(" ");

	let img = "https://image.shutterstock.com/image-vector/magic-ball-on-white-600w-534778603.jpg"

	let ballembed = new Discord.RichEmbed()
	.setThumbnail(img)
	.setAuthor(message.author.tag)
	.setColor(cores.azul)
	.addField("Pergunta:", question)
	.addField("Resposta:", replies[result])

	message.channel.send(ballembed);

}	

  






module.exports.config = {
    name: "bola8",
    description: "uma bola cheia de sabedoria.",
    usage: "! + bola8 + pergunta",
    aliases: ["bola", "b8"],
    accessablelby: "Membros"
}