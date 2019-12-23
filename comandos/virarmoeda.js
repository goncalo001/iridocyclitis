const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");




module.exports.run = async (bot, message, args) => {
    if(!message.mentions.members.first()) return message.channel.send("É necessário fornecer um nome de um usuário para jogar cara ou coroa.").then(m => m.delete(2000));

    if(!messageArray[2]) return message.channel.send("É necessário que escolha uma das duas opções 'cara' ou 'coroa'.").then(m => m.delete(2000));
    
    var sides = ["cara", "coroa"];

    var side = -1;

    var otherUserSide = -1;

    if(messageArray[2].toLowerCase() == "cara") {

        side = 0
    } else {
        side = 1
    }

    if(side == "cara") {
        otherUserSide == 1
    } else {
        otherUserSide == 0
    }
    var number = Math.floor(Math.random() * 2);
    if (side == number) {

    }

    


}

    
    
   
    


module.exports.config = {
    name: "virarmoeda",
    description: "para jogar cara ou coroa.",
    usage: "! + virarmoeda ",
    aliases: ["coinflip", "flip"],
    accessablelby: "Membros"
}