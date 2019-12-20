const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const jimp = require("jimp");


module.exports.run = async (bot, message, args, ops) => {
    
    let user = message.mentions.users.first() || message.author;
    

    let background = await jimp.read('yu-gi-oh-token.png');
    

    jimp.read(user.displayAvatarURL, (err, avatar) => {
        
        avatar.resize(294, 294)
        background.resize(384, 564)
        background.composite(avatar, 45, 101).write("yugioh.png")
        message.channel.send(new Discord.Attachment("yugioh.png"));

        
        
    })
  
    
}




module.exports.config = {
    name: "yugiohcard",
    description: "transforma o teu avatar numa carta e yugioh.",
    usage: "! + yugiohcard + (nome do usuário)",
    aliases: ["yugioh"],
    accessablelby: "Membros"
}