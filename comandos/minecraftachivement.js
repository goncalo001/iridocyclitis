const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");


module.exports.run = async (bot, message, args) => {
    var ids = [
        "20",
        "1",
        "13",
        "18",
        "17",
        "9",
        "31",
        "22",
        "23",
        "2",
        "11",
        "19",
        "24",
        "25",
        "12",
        "33"
        ]
        const randomizer = Math.floor(Math.random()*ids.length);
        const args = message.content.split(" ").slice(1).join(" ")
if (!args) return message.channel.send("É necessário que introduza algo.");
const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)




}


module.exports.config = {
    name: "minecraftachievement",
    description: "envia um achievement do minecraft.",
    usage: "! + minecraftachievement + (texto)",
    aliases: ["MCA", "mcachivement"],
    accessablelby: "Membros"
}