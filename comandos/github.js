const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args) => {

const fetch = require('node-fetch');

if(!args.join('-')) return message.channel.send('É necessário fornecer o nome de um usuário do github').then(m => m.delete(2000));
    
    fetch(`https://api.github.com/users/${args.join('-')}`)
      .then(res => res.json()).then(body => {
        if(body.message) return message.channel.send(`O usuário: \`${args.join(' ')}\` não foi encontrado.`).then(m => m.delete(2000));
      let { login, avatar_url, name, id, html_url, repos_url, followers, following, location, created_at, bio } = body;

      const embed = new Discord.RichEmbed()
        .setColor(cores.azul)
        .setAuthor(`Informação da conta do github de ${login}`, avatar_url)
        .setThumbnail(avatar_url)
        .setDescription(`**Nome**: \`${name || 'Desconhecido'}\`
        **ID**: ${id || 'Desconhecido'}
        **Link**: **[link](${html_url})**
        **Repositórios**: \`${repos_url.size}\`
        **Seguidores**: \`${followers || 0}\`
        **A seguir**: \`${following || 0}\`
        **Localização**: \`${location || 'Desconhecida'}\`
        **Criado em**: \`${new Date(created_at).toLocaleString('en-GB', { dateStyle: 'full' }) || 'Desconhecido'}\`
        **Bio / Descrição**: ${bio || 'Um usuário do github a criar coisas fantásticas.'}`)
          return message.channel.send(embed);
      });

}

    
    
   
    


module.exports.config = {
    name: "github",
    description: "faz uma pesquisa de usuários no github.",
    usage: "! + github + (nome do usuário do github)",
    aliases: ["git", "ghub"],
    accessablelby: "Membros"
}