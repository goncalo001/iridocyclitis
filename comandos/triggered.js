const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const jimp = require("jimp");


module.exports.run = async (bot, message, args, ops) => {
    
    let user = message.mentions.users.first() || message.author;
    

    let background = await jimp.read('Triggered.png');
    

    jimp.read(user.displayAvatarURL, (err, avatar) => {
        
        avatar.resize(310, 214)
        background.resize(310, 264)
        background.composite(avatar, 0, 0).write("triggered.png")
        message.channel.send(new Discord.Attachment("triggered.png"));

        
        
    })
  
    
}




module.exports.config = {
    name: "triggered",
    description: "para irritares alguém",
    usage: "! + triggered + (nome do usuário)",
    aliases: ["trigger"],
    accessablelby: "Membros"
}