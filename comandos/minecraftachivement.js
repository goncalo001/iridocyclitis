const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const MCA = require('minecraft-achievement');

module.exports.run = async (bot, message, args) => {
    args = message.content.split(" ");

    var url = MCA.url({
        title: args[0],
        body: args[1],
        icon: args[2]
    })

    message.channel.send(url);

}


module.exports.config = {
    name: "minecraftachievement",
    description: "envia um achievement do minecraft.",
    usage: "! + minecraftachievement + (nome do ícone) + (texto)",
    aliases: ["MCA", "mcachivement"],
    accessablelby: "Membros"
}