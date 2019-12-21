const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const Font = require('ascii-art-table');



module.exports.run = async (bot, message, args, ops) => {

    Font.fontPath = 'Fonts'

    if(!args.join(' ')) return message.channel.send("É necessário escrever algum texto para converter para ascii.").then(m => m.delete(2000));
    
    Font.create(args.join(' '), 'Doom', async function(rendered) {

        console.log(rendered)

       message.channel.send(rendered, {
           code: 'md'
       })
    
    });
   
    
}

module.exports.config = {
    name: "ascii",
    description: "transforma texto normal em ascii.",
    usage: "! + ascii + (texto)",
    aliases: ["asciitexto", "as"],
    accessablelby: "Membros"
}