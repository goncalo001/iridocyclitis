const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const cores = require("./cores.json")
const bot = new Discord.Client();




const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {

    if(err) console.log(err)
  
    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./comandos/${f}`);
        bot.commands.set(pull.config.name, pull) 
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

fs.readdir("./nsfw/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./nsfw/${f}`);
        bot.commands.set(pull.config.name, pull) 
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});





bot.on("ready", async () => {
    console.log(`${bot.user.username} está online!`);

    bot.user.setActivity("iridocyclitis", {type:"PLAYING"});
    const guild = bot.guilds.get("651776180965343253");
    const getStats = () => {
        return {
            online: guild.members.filter((x) => x.presence.status === "online").size,
            bots: guild.members.filter((x) => x.user.bot).size,
            roles: guild.roles.size,
            members: guild.memberCount
        }
    };
    const [onlineC, botsC, rolesC, memberC] = [
        guild.channels.get("657752359648362527"),
        guild.channels.get("657756649695608854"),
        guild.channels.get("657749824233406495"),
        guild.channels.get("656632482048770051")
    ];
    setInterval(() => {
        const { online, bots, roles, members } = getStats();
        onlineC.setName(`Membros online: ${online}`);
        botsC.setName(`Bots: ${bots}`);
        rolesC.setName(`Cargos: ${roles}`);
        memberC.setName(`Membros: ${members}`)
    }, 3000)




})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot, message, args)




    if(cmd === `${prefix}olá`){
        return message.channel.send("Saudações!")
    }

  
  

   
});

bot.on("guildMemberAdd", member => {

    var role =  member.guild.roles.find('name', 'alcoólicos')
    member.addRole(role);

    let myGuild = bot.guilds.get('651776180965343253')

    let memberCount = myGuild.memberCount;

    let memberCountChannel = myGuild.channels.get('656632482048770051')

    memberCountChannel.setName("Membros: " + memberCount)
    .catch(error => console.log(error))

    

    


    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setTitle("**Alcólicos Anónimos**")
    .setThumbnail(`${member.user.displayAvatarURL}`)
    .addField(`Bem vindo ao servidor, **${member.user.tag}**!`)
    .addField("**Dono do servidor:**", `${member.guild.owner}`, true)
    .addField("**Contagem de Membros:**", `${member.guild.memberCount}`, true)
    .addField("**Contagem de Cargos:**", `${member.guild.roles.size}`, true)
    .addField("Data:", member.joinedAt.toLocaleString())
    .setFooter(`iridocyclitis`, bot.user.displayAvatarURL)    
    
    member.guild.channels.get("652146714416775168").send(embed); 
    
})

bot.on("guildMemberRemove", member => {

    var role =  member.guild.roles.find('name', 'alcoólicos')
    member.removeRole(role);

    let myGuild = bot.guilds.get('651776180965343253')

    let memberCount = myGuild.memberCount;

    let memberCountChannel = myGuild.channels.get('656632482048770051')
   
    memberCountChannel.setName("Membros: " + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error))
    
    


    let embed = new Discord.RichEmbed()
    .setColor(cores.azul)
    .setTitle("**Alcólicos Anónimos**")
    .setThumbnail(`${member.user.displayAvatarURL}`)
    .addField(`Adeus, **${member.user.tag}** e até à vista.`)
    .addField("**Dono do servidor:**", `${member.guild.owner}`, true)
    .addField("**Contagem de Membros:**", `${member.guild.memberCount}`, true)
    .addField("**Contagem de Cargos:**", `${member.guild.roles.size}`, true)
    .addField("Data:", member.joinedAt.toLocaleString())
    .setFooter(`iridocyclitis`, bot.user.displayAvatarURL)    
    
    member.guild.channels.get("652146714416775168").send(embed); 
    
})



bot.login(process.env.token);

