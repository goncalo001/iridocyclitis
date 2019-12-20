const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const jimp = require("jimp");


module.exports.run = async (bot, message, args, ops) => {
    
    let user = message.mentions.users.first() || message.author;
    

    let background = await jimp.read('this-is-beautiful.png');
    

    jimp.read(user.displayAvatarURL, (err, avatar) => {
        
        avatar.resize(84, 95)
        background.resize(376, 400)
        background.composite(avatar, 258, 28).write("beautiful.png")
        background.composite(avatar, 258, 229).write("beautiful.png")
        message.channel.send(new Discord.Attachment("beautiful.png"));

        
        
    })
  
    
}




module.exports.config = {
    name: "beautiful",
    description: "que beleza!",
    usage: "! + beautiful + (nome do usuário)",
    aliases: ["beauty"],
    accessablelby: "Membros"
}