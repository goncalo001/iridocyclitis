const Discord = require("discord.js");
const cores = require("../cores.json");
const ytdl = require("ytdl-core");
const search = require("yt-search");


module.exports.run = async (bot, message, args, ops) => {
    search(args.join(" "), function(err, res) {

        if(err) return message.channel.send("Ocorreu um erro!Tente de novo.")

        let videos = res.videos.slice(0, 10);
        let resp = ``;
        for (var i in videos) {
            resp += `[${parseInt(i)+1}]: \`${videos[i].title}\`\n`
        }

        resp += `\n**Escolha um número entre:**\`1-${videos.length}\``;

      

        message.channel.send(resp)


        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

        const collector = message.channel.createMessageCollector(filter);

        collector.videos = videos;

        collector.once('collect', function(m) {
            let commandFile = require("./play");
            commandFile.run(bot, message, [this.videos[parseInt(m.content)-1].url], ops);
        });
    })


    
    
}

module.exports.config = {
    name: "ytpesquisar",
    description: "para pesquisar uma música no youtube.",
    usage: "! + ytpesquisar + termo de pesquisa",
    aliases: ["ytpq"],
    accessablelby: "Membros"
}