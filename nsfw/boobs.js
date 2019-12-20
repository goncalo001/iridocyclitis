const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const snekfetch = require("snekfetch");




module.exports.run = async (bot, message, args) => {
   
    if (!message.channel.nsfw) {
        message.react('💢');
        return message.channel.send("É necessário estar num canal de nsfw para poder usar este comando.");

    } else {

        const id = [Math.floor(Math.random() * 10930)];
        const res = await snekfetch.get(`http://api.oboobs.ru/boobs/${id}`);
        const preview = res.body[0]["PREVIEW".toLowerCase()];
        const image = `http://media.oboobs.ru/${preview}`;

        const embed = new Discord.RichEmbed()
            .setFooter('http://oboobs.ru/')
            .setImage(image)
            .setColor(cores.azul);
        return message.channel.send(embed);
    }
}

    
  



    

    
    





  



module.exports.config = {
    name: "boobs",
    description: "envia imagens de mamas.",
    usage: "! + boobs",
    aliases: ["bs"],
    accessablelby: "Membros"
}

