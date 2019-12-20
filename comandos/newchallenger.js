const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const jimp = require("jimp");


module.exports.run = async (bot, message, args, ops) => {
    
    let user = message.mentions.users.first() || message.author;
    

    let background = await jimp.read('challenger.png');
    

    jimp.read(user.displayAvatarURL, (err, avatar) => {
        
        avatar.resize(130, 150)
        background.resize(315, 310)
        background.composite(avatar, 180, 100).write("new challenger.png")
        message.channel.send(new Discord.Attachment("new challenger.png"));

        
        
    })
  
    
}




module.exports.config = {
    name: "newchallenger",
    description: "novo desafiante",
    usage: "! + newchallenger + (nome do usuário)",
    aliases: ["nc"],
    accessablelby: "Membros"
}