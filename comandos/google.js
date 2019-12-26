const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const Google = require('relevant-google');
const googleAPIKey = (process.env.googleAPI);

module.exports.run = async (bot, message, args) => {
    const fetch = require('node-fetch');

    const queryString = require('querystring');

    const google = new Google(googleAPIKey);

    if(!args.length) {
        return message.channel.send('É necessário fornecer um termo de pesquisa.').then(m => m.delete(2000));
    }

    const query = queryString.stringify({term: args.join(' ')});

    const { list } = await fetch(google.search(query).then(res => {
        let embed = new Discord.RichEmbed()
        .setColor(cores.azul)
        .setTitle(`${res.title}`)
        .setURL(`${res.url}`)
        .addField(`**Resultados Google:**\n${res.snippet}`)
        .addField(`**Link:**\n${res.url}`)
        message.channel.send(embed)
    }))

    if(!list.length) {
        message.channel.send(`Não existem resultados para a pesquisa ${args.join(" ")}`);
    }
 
    
    
   

}

    
    
   
    


module.exports.config = {
    name: "google",
    description: "pesquisa resultados diretamente da google.",
    usage: "! + google + (termo de pesquisa)",
    aliases: ["pesquisa", "pgoogle"],
    accessablelby: "Membros"
}