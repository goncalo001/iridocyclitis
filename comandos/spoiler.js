const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");




module.exports.run = async (bot, message, args) => {
    message.channel.send({
        files: [{
          attachment: 'https://www.washingtonblade.com/content/files/2019/08/Yay_Youre_Gay_Now_What_book_cover_insert_courtesy_Frances_Lincoln.jpg',
          name: 'SPOILER_NAME.jpg'
        }]
      })

}

    
    
   
    


module.exports.config = {
    name: "spoiler",
    description: "envia uma imagem em forma de spoiler.",
    usage: "! + spoiler",
    aliases: ["spoil", "sp"],
    accessablelby: "Membros"
}