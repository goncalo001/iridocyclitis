const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const figlet = require('figlet');



module.exports.run = async (bot, message, args) => {
    try {
        if (!args.join(' ')) return message.channel.send('É necessário introduxir texto para ser convertido para ascii').then(m => m.delete(2000))
        figlet.text(args.join(' '), {
            font: "ANSI Shadow",
            horizontalLayout: "default",
            verticalLayout: "default"
        }, function (err, data) {
            if (err) {
                console.log("Ocorreu um erro...")
                console.dir(err)
                return;
            }
            message.channel.send(data, {
                code: "md"
            })
        })
    } catch (err) {
        console.error(err)
    }
}

    
    
   
    


module.exports.config = {
    name: "ascii",
    description: "transforma texto normal em ascii.",
    usage: "! + ascii + (texto)",
    aliases: ["asciitexto", "as"],
    accessablelby: "Membros"
}