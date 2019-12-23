const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const jimp = require("jimp");


module.exports.run = async (bot, message, args, ops) => {
    
    let user = message.mentions.users.first() || message.author;
    

    let background = await jimp.read('rip.png');
    

    jimp.read(user.displayAvatarURL, (err, avatar) => {
        
        avatar.resize(150, 150)
        background.resize(300, 310)
        background.greyscale()
        background.composite(avatar, 80, 80).write("rest_in_peace.png")
        message.channel.send(new Discord.Attachment("rest_in_peace.png"));

        
        
    })
  
    
}




module.exports.config = {
    name: "rip",
    description: "para matares alguém",
    usage: "! + rip + (nome do usuário)",
    aliases: ["rest in peace"],
    accessablelby: "Membros"
}