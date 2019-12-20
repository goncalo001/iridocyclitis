const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json")
const HorsengelRoulette = require("horsengel-roulette");

module.exports.run = async (bot, message, args, ops) => {
    const hr = new HorsengelRoulette(message, message.member, message.mentions.members.first(), '!', 'fr')
    hr.load(6, 1);
    hr.start();

   
    
}






module.exports.config = {
    name: "roletarussa",
    description: "para os mais corajosos.",
    usage: "! + roletarussa + (nome usuário)",
    aliases: ["roleta"],
    accessablelby: "Membros"
}