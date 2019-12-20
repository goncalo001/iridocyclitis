const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const weather = require("weather-js");

module.exports.run = async (bot, message, args) => {
    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
        if(err) message.channel.send(err)

     
        if(result.length === 0) {
            message.channel.send("**É necessário introduzir uma localidade.**")
            return;
        }

    
        var current = result[0].current 
        var location = result[0].location 

     
        let embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`) 
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl) 
        .setColor(cores.azul) 
        .addField("Timezone", `UTC${location.timezone}`, true) 
        .addField("Degree Type", location.degreetype, true) 
        .addField("Temperature", `${current.temperature}`, true)
        .addField("Feels like", `${current.feelslike} Degrees`, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Humidity", ` ${current.humidity}%`, true)
        .addField("Day", `${current.day}`, true)
        .addField("Date", `${current.date}`, true)
        .setFooter(`iridocyclitis`, bot.user.displayAvatarURL)
           
     
           message.channel.sendEmbed(embed)

    });

    message.delete();    
   
}
  
   




module.exports.config = {
    name: "metereologia",
    description: "dá a previsão do tempo.",
    usage: "! + metereologia + (localidade)",
    aliases: ["m", "ml"],
    accessablelby: "Membros"
}