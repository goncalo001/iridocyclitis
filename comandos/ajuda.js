const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {

    if(args[0] == "ajuda") return message.channel.send(`Digite ${prefix}ajuda em vez disso.`).then(m => m.delete(2000));

    if(args[0]) {
    let command = args[0];
    if(bot.commands.has(command)) {

        command = bot.commands.get(command);
        hEmbed = new Discord.RichEmbed()
        .setColor(cores.azul)
        .setAuthor(`Menu de Ajuda`, message.guild.iconURL)
        .setDescription(`O prefixo do bot é: ${prefix}\n\n**Comando:** ${command.config.name}\n**Descrição:** ${command.config.description || "Não tem descrição."}\n**Uso:** ${command.config.usage || "Não tem uso."}\n**Acessível a:** ${command.config.accessablelby || "Membros"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
        message.channel.send(hEmbed)
    }}
    if(!args[0]) {
        message.delete();
        
        let sEmbed = new Discord.RichEmbed()
        .setColor(cores.azul)
        .setAuthor(`iridocyclitis`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`Estes são os comandos disponíveis para o bot iridocyclitis.\nO prefixo do bot é: ${prefix}.\nPara obter um menu de ajuda específico para cada comando digite: ! + ajuda + (comando).`)
        .setTitle(`**Comandos**`)
        .addField(`🔨 Moderação:`, "``banir`` ``desbanir`` ``mute`` ``unmute`` ``expulsar`` ``limpar`` ``criarcanaltexto`` ``apagarcanal`` ``criarcanalvoz`` ``criarcategoria`` ``criarcargo`` ``apagarcargo`` ``darcargo`` ``removercargo`` ``dm`` ``bloquearcanal`` ``desbloquear canal``")
        .addField(`☺️ Diversão:`, "``memes`` ``bola8`` ``matar`` ``pesquisar`` ``gay`` ``sondagem`` ``urban`` ``piada`` ``roast`` ``confissão`` ``photograph`` ``illegal`` ``wanted`` ``beautiful`` ``newchallenger`` ``triggered`` ``yugiohcard`` ``worthless`` ``rip`` ``pedrapapeltesoura`` ``roletarussa`` ``ascii`` ``spoiler`` ``ghost`` ``pixelizar`` ``nickname``")
        .addField(`⚒️ Utíl:`, "``infoservidor`` ``infousuário`` ``ajuda`` ``metereologia``")
        .addField(`🔞 NSFW:`, "``ass`` ``boobs`` ``anal`` ``pussy`` ``porngif`` ``4k`` ``pornhub``")
        .addField(`🎼 Música:`, "``play`` ``parar`` ``ytpesquisar``")
        .setFooter("iridocyclitis", bot.user.displayAvatarURL)
       
        message.channel.send(sEmbed)
    }

}    



module.exports.config = {
    name: "ajuda",
    description: "envia ao usuário uma lista com os comandos de ajuda",
    aliases: ["aj", "comandos"],
    uso: "! + ajuda ou ! + ajuda + (comando)",
    accessablelby: "Membros"
}