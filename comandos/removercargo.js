const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");

module.exports.run = async (bot, message, args, ops) => {
   
    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Não tem permissão para usar este comando.").then(m => m.delete(2000));

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])

    if(!rMember) return message.channel.send("É necessário mencionar o nome de um usuário para que eu lhe possa retirar o cargo.").then(m => m.delete(2000));

    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first();

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Não tenho permissão para usar este comando.").then(m => m.delete(2000));

    if(!role) return message.channel.send("É necessário fornecer o nome de um cargo existente para eu remover do usuário.").then(m => m.delete(2000));

    if(!rMember.roles.has(role.id)) {
        return message.channel.send(`O usuário ${rMember.displayName} não tem esse cargo.`).then(m => m.delete(2000));
    } else {
        await rMember.removeRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`O cargo ${role.name}, foi removido de ${rMember.displayName}`).then(m => m.delete(2000));
    }

    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderação:", "removercargo")
    .addField("Usuário:", `${rMember.displayName}`)
    .addField("Cargo:", `${role.name}`)
    .addField("Moderator", message.author.username)
    .addField("Data:", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === "modlogs");
    sChannel.send(embed)


    

    
        
        
        

    


    
}

module.exports.config = {
    name: "removercargo",
    description: "para criar um cargo no servidor.",
    usage: "! + removercargo + (nome do cargo) + (nome do usuário)",
    aliases: ["rmcg"],
    accessablelby: "Administrador"
}