const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const jimp = require("jimp");


module.exports.run = async (bot, message, args, ops) => {
    
    let user = message.mentions.users.first() || message.author;
    

    let background = await jimp.read('wanted.png');
    

    jimp.read(user.displayAvatarURL, (err, avatar) => {
        
        avatar.resize(184, 178)
        background.resize(300, 400)
        background.composite(avatar, 55, 140).write("Wanted.png")
        message.channel.send(new Discord.Attachment("Wanted.png"));

        
        
    })
  
    
}




module.exports.config = {
    name: "wanted",
    description: "o procurado",
    usage: "! + wanted + (nome do usuário)",
    aliases: ["wtd"],
    accessablelby: "Membros"
}