const Discord = require("discord.js");
const cores = require("../cores.json");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
   
	if(!args[2]) return message.channel.send("É necessário escrever alguma coisa...").then(m => m.delete(2000));
	
    let confession = args.slice(0).join(" ");

    let img = "https://image.shutterstock.com/image-vector/priest-icon-flat-illustration-vector-600w-1481284862.jpg"
    
    var guild = bot.guilds.get("651776180965343253"); 
    var confessionChannel = guild.channels.get("656687918202748973");
    message.delete()

    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setDescription(confession)
    .setTitle("**Confissão:**")
    .setFooter("Anónimo")
    .setThumbnail(img)

    confessionChannel.sendMessage(embed)



}	

  






module.exports.config = {
    name: "confissão",
    description: "para te confessares os teus maiores segredos.",
    usage: "! + confissão + (confissão)",
    aliases: ["confess", "cf"],
    accessablelby: "Membros"
}