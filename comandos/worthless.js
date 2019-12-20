const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const jimp = require("jimp");


module.exports.run = async (bot, message, args, ops) => {
    
    let user = message.mentions.users.first() || message.author;
    

    let background = await jimp.read('this-is-worthless.png');
    

    jimp.read(user.displayAvatarURL, (err, avatar) => {
        
        avatar.resize(322, 312)
        background.resize(1440, 1614)
        background.composite(avatar, 542, 306).write("worthless.png")
        message.channel.send(new Discord.Attachment("worthless.png"));

        
        
    })
  
    
}




module.exports.config = {
    name: "worthless",
    description: "não vales nada.",
    usage: "! + worthless + (nome do usuário)",
    aliases: ["noworth"],
    accessablelby: "Membros"
}