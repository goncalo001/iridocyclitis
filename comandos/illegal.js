const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const jimp = require("jimp");


module.exports.run = async (bot, message, args, ops) => {
    
    let user = message.mentions.users.first() || message.author;
    

    let background = await jimp.read('illegal.png');
    

    jimp.read(user.displayAvatarURL, (err, avatar) => {
        
        avatar.resize(150, 160)
        background.resize(1000, 750)
        background.composite(avatar, 730, 358).write("Illegal.png")
        message.channel.send(new Discord.Attachment("Illegal.png"));

        
        
    })
  
    
}




module.exports.config = {
    name: "illegal",
    description: "o que é ilegal?",
    usage: "! + illegal + (nome do usuário)",
    aliases: ["not legal"],
    accessablelby: "Membros"
}