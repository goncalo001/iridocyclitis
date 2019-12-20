const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const jimp = require("jimp");


module.exports.run = async (bot, message, args, ops) => {
    
    let user = message.mentions.users.first() || message.author;
    

    let background = await jimp.read('look-at-this-photograph.png');
    

    jimp.read(user.displayAvatarURL, (err, avatar) => {
        
        avatar.resize(180, 125)
        avatar.rotate(13)
        background.resize(620, 349)
        background.composite(avatar, 321, 105).write("photo.png")
        message.channel.send(new Discord.Attachment("photo.png"));

        
        
    })
  
    
}




module.exports.config = {
    name: "photograph",
    description: "look at this photograph...",
    usage: "! + photograph + (nome do usuário)",
    aliases: ["photograph"],
    accessablelby: "Membros"
}