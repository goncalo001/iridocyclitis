const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const ascii = require('ascii-art');



module.exports.run = async (bot, message, args) => {

    let text = args.join(" ");

    if(!text) return message.channel.send("É necessário escrever algum texto para converter para ascii.").then(m => m.delete(2000));
    
    let text = args.join(" ");
        
        
    
    ascii.font(text, "Doom", function(rendered) {

        message.channel.send("```"+rendered+"```");
    });

    
   
    
}

module.exports.config = {
    name: "ascii",
    description: "transforma texto normal em ascii.",
    usage: "! + ascii + (texto)",
    aliases: ["asciitexto", "as"],
    accessablelby: "Membros"
}