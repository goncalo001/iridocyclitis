const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "445273789140303872") return message.channel.send('Tu não és o dono do bot.').then(m => m.delete(2000));

    if(!args[0]) return message.channel.send("É necessário fornecer o nome de um comando para reiniciar").then(m => m.delete(2000));

    let CommandName = args[0].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${CommandName}.js`)]
        bot.commands.delete(CommandName)
        const pull = require(`./${CommandName}.js`)
        bot.commands.set(CommandName, pull)

    } catch (e) {
        return message.channel.send(`Não foi possível recarregar: \`${args[0].toUpperCase()}\``).then(m => m.delete(2000));

    }

    message.channel.send(`O comando \`${args[0].toUpperCase()}\` foi reiniciado.`).then(m => m.delete(2000));
    

}

    
    
   
    


module.exports.config = {
    name: "recarregar",
    description: "reinicia os comandos do bot.",
    usage: "! + recarregar + (nome do comando)",
    aliases: ["reiniciar"],
    accessablelby: "Administrador"
}