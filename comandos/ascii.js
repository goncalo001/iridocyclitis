const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ascii = require("ascii-art");



module.exports.run = async (bot, message, args, ops) => {
    if(!args.join(' ')) return message.channel.send("É necessário escrever algum texto para converter para ascii.").then(m => m.delete(2000));
    
    ascii.font(args.join(' '), 'Doom', function(rendered) {
       console.log(rendered)

       if(rendered.length > 2000) return message.channel.send("Essa mensagem é muito longa.").then(m => m.delete(2000));

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