const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const urban = require("urban")
const { stripIndents } = require("common-tags");

module.exports.run = async (bot, message, args, ops) => {
    if(args < 1 || !["pesquisar", "random"].includes(args[0])) return message.channel.send("É necessário introduzir um termo de pesquisa.");
    let image = "http://cdn.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium";
    let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random();
    try {

        search.first(res => {

            if(!res) return message.channel.send("Não foram encontrados resultados.");
            let { word, definition, example, thumbs_up, thumbs_down, permalink, author} = res;

            let embed = new Discord.RichEmbed()
            .setColor(cores.azul)
            .setAuthor(`Urban Dictionary | ${word}`, image)
            .setThumbnail(image)
            .setDescription(stripIndents`**Definição:** ${definition || "Sem definição"}
            **Exemplo:** ${example || "Sem exemplo"}
            **Upvote:** ${thumbs_up || 0}
            **Downvote:** ${thumbs_down || 0}
            **Link:** [link para ${word}](${permalink || "https://www.urbandictionary.com/"})`)
            .setTimestamp()
            .setFooter(`Escrito por: ${author || "desconhecido"}`);

            message.channel.send(embed)
        })
    } catch(e) {

        console.log(e)
        return message.channel.send("Ocorreu um erro!Tente outra vez.")
        }
    
    

}

module.exports.config = {
    name: "urban",
    description: "pesquisa por uma definição no site urbandictionary.com.",
    usage: "! + urban + pesquisar + (termo de pesquisa) ou !urban + random",
    aliases: ["urb"],
    accessablelby: "Membros"
}