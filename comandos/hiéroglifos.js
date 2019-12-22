const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const figlet = require('figlet');
const fs = require('fs');
const path = require('path');






module.exports.run = async (bot, message, args) => {

    
let data = fs.readFileSync(path.join(__dirname, "Hieroglyphs.flf"), "utf8");
figlet.parseFont('Hieroglyphs', data);
    try {
        if (!args.join(' ')) return message.channel.send('É necessário introduxir texto para ser convertido para ascii').then(m => m.delete(2000))
        figlet.text(args.join(' '), {
            font: "Hieroglyphs",
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
    name: "hieroglifos",
    description: "transforma texto normal em hieroglifos.",
    usage: "! + hieroglifos + (texto)",
    aliases: ["hr"],
    accessablelby: "Membros"
}