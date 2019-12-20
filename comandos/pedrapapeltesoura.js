const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json")
const chooseArray = ["⛰️", "📃", "✂️"]

async function promptMessage(message, author, time, validReactions) {
    time *= 1000;

    for (const reaction of validReactions) await message.react(reaction);

    const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;

    return message
        .awaitReactions(filter, {max: 1, time})
        .then(collected => collected.first() && collected.first().emoji.name);

}

module.exports.run = async (bot, message, args, ops) => {
    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
    .setDescription("Reage com um dos emojis para jogar.")
    .setTimestamp();

    const m = await message.channel.send(embed);

    const reacted = await promptMessage(m, message.author, 30, chooseArray);

    const botChoice = chooseArray[Math.floor(Math.random() * chooseArray.length)];

    const result = await getResult(reacted, botChoice);
    await m.clearReactions();

    embed
    .setDescription("")
    .addField(result, `${reacted} vs ${botChoice}`);

    m.edit(embed)

    function getResult(me, clientChosen) {
        if((me === "⛰️" && clientChosen === "✂️") || 
        (me === "📃" && clientChosen === "⛰️") || 
        (me === "✂️" && clientChosen === "📃")) {
            return "Ganhaste!";
        } else if (me === clientChosen) {
            return "Empate!"
        } else {
            return "Perdeste!"
        }
    } 

    
}






module.exports.config = {
    name: "pedrapapeltesoura",
    description: "para jogares pedra papel tesoura.",
    usage: "! + pedrapapeltesoura",
    aliases: ["ppt"],
    accessablelby: "Membros"
}