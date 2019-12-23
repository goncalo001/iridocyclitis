const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");




module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    
    jimp.read(user.displayAvatarURL, (err, avatar) => {
        
        avatar.resize(300, 300)

        avatar.pixelate()
        
        
        message.channel.send(new Discord.Attachment("pixelizado.png"));

        
        
    })

}

    
    
   
    


module.exports.config = {
    name: "pixelizar",
    description: "pixeliza uma imagem.",
    usage: "! + pixelizar + (nome do usuário)",
    aliases: ["pixel", "px"],
    accessablelby: "Membros"
}