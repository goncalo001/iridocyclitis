const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const cores = require("../cores.json");
const options = [
    '🇦',
    '🇧',
    '🇨',
    '🇩',
    '🇪',
    '🇫',
    '🇬',
    '🇭',
    '🇮',
    '🇯',
    '🇰',
    '🇱',
    '🇲',
    '🇳',
    '🇴',
    '🇵',
    '🇶',
    '🇷',
    '🇸',
    '🇹',
    '🇺',
    '🇻',
    '🇼',
    '🇽',
    '🇾',
    '🇿',
  ];
const pollLog = {};
function canSendPoll(user_id) {
if (pollLog[user_id]) {

    const timeSince = Date.now() - pollLog[user_id].lastPoll;
    if (timeSince < 30000) {

    return false;
    }
}
return true;
}

module.exports.run = async (bot, message, args, ops) => {
    args = message.content.match(/"(.+?)"/g);
    if (args) {
      if (!canSendPoll(message.author.id)) {
        return message.channel.send(`${message.author} porfavor espere antes de solicitar outra sondagem.`).then(m => m.delete(2000));
      } else if (args.length === 1) { 
        const question = args[0].replace(/"/g, '');
        pollLog[message.author.id] = {
          lastPoll: Date.now()
        };
        return message.channel.send(`${message.author} pergunta: ${question}`).then(async (pollMessage) => {
            await pollMessage.react('👍');
            await pollMessage.react('👎');
            await pollMessage.react(message.guild.emojis.get('475747395754393622'));
          });
      } else { // multiple choice
        args = args.map(a => a.replace(/"/g, ''));
        const question = args[0];
        const questionOptions = [...new Set(args.slice(1))];
        if (questionOptions.length > 20) {
          return message.channel.send(`${message.author} As sondagens são limitadas a 20 opções.`).then(m => m.delete(2000));
        } else {
          pollLog[message.author.id] = {
            lastPoll: Date.now()
          };
          return message.channel.send(`${message.author} pergunta: ${question}
${questionOptions.map((option, i) => `${options[i]} - ${option}`).join('\n')}`).then(async (pollMessage) => {
              for (let i = 0; i < questionOptions.length; i++) {
                await pollMessage.react(options[i]);
              }
            });
        }
      }
    } else {
      return message.channel.send(`${message.author} sondagem inválida! a pergunta e as opções tem que estar em aspas.`).then(m => m.delete(2000));
    }
  



}
module.exports.config = {
    name: "sondagem",
    description: "cria uma sondagem com votação múltilpla.",
    usage: '! + sondagem + "(questão)" + "(opção 1)" + "(opção 2)" + "(opção 3)" + ...',
    aliases: ["sond"],
    accessablelby: "Membros"
}