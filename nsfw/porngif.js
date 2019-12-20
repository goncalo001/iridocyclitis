const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("É necessário estar num canal de nsfw para poder usar este comando.")

    if (message.channel.nsfw === true) {
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'pgif'})
        .end((err, response) => {
          message.channel.send({ file: response.body.message });
        });
    } 

    
}


   

  



module.exports.config = {
    name: "porngif",
    description: "envia gifs só de putaria.",
    usage: "! + porngif",
    aliases: ["pgif", "porn"],
    accessablelby: "Membros"
}