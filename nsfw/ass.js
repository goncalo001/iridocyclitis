const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const snekfetch = require("snekfetch")




module.exports.run = async (bot, message, args) => {
   
    if (!message.channel.nsfw) {
        message.react('💢');
        return message.channel.send("É necessário estar num canal de nsfw para poder usar este comando.");

    } else {

        const id = [Math.floor(Math.random() * 4923)];
        const res = await snekfetch.get(`http://api.obutts.ru/butts/${id}`);
        const preview = res.body[0]["PREVIEW".toLowerCase()];
        const image = `http://media.obutts.ru/${preview}`;

        const embed = new Discord.RichEmbed()
            .setFooter('http://obutts.ru/')
            .setImage(image)
            .setColor(cores.azul);
        return message.channel.send(embed);
    }    


    

    
    





}    



module.exports.config = {
    name: "ass",
    description: "envia imagens de cus.",
    usage: "! + ass",
    aliases: ["as", "but"],
    accessablelby: "Membros"
}

