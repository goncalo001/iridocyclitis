const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "445273789140303872") return message.channel.send('Tu não és o dono do bot.').then(m => m.delete(2000));

    try {
        await message.channel.send("O bot está a encerrar...").then(m => m.delete(2000));
        process.exit()
    } catch(e) {
        message.channel.send(`ERRO: ${e.message}`)

    }
    
   

}

    
    
   
    


module.exports.config = {
    name: "desligar",
    description: "encerra o bot completamente.",
    usage: "! + desligar",
    aliases: ["encerrar", "off"],
    accessablelby: "Administrador"
}