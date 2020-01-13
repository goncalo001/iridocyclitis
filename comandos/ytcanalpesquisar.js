const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const youtubeSearch = require('youtube-search');

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
        if(!args[0]) return message.channel.send(embed.setColor(cores.azul).setDescription(`${client.emojis.get('660343595626397699')} É necessário fornecer um termo de pesquisa.`));
        
            youtubeSearch(args.join(' '), { maxResults: 1, key: process.env.youtubeAPI }, (err, res) => {
                if(!res) return message.channel.send(embed.setColor(cores.azul).setDescription(`${client.emojis.get('660343595626397699')} \`${args.join(' ')}\` Não foi encontrado no youtube.`));
                if(err) return message.channel.send(embed.setColor(cores.azul).setDescription(`${client.emojis.get('660343595626397699')} Por favor tente outra vez mais tarde.`));

            let em = new Discord.RichEmbed()
                .setAuthor(res[0].channelTitle, res[0].thumbnails.high.url)
                .setColor(cores.azul)
                .setThumbnail(res[0].thumbnails.high.url)
                .setDescription(`**${res[0].channelTitle}** Informação do canal
        
                **URL**: [link](${res[0].link})
                **Reside no youtube desde**: \`${new Date(res[0].publishedAt).toLocaleString('en-GB', { dateStyle: 'full'})}\`
                **ID do canal**: \`${res[0].channelId}\`
                **Descrição do canal**: \`\`\`css\n${res[0].description || 'Não há descrição'}\`\`\``)
                .setFooter(`Pesquisa Youtube`, res[0].thumbnails.high.url)

            return message.channel.send(em);
            })
}

    
    
   
    


module.exports.config = {
    name: "ytcanalpesquisar",
    description: "faz uma pesquisa de canais no youtube .",
    usage: "! + ytcanalpesquisar + (nome do canal)",
    aliases: ["ytcpesquisar", "canalyoutube"],
    accessablelby: "Membros"
}