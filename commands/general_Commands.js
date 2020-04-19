const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

module.exports = {
    name: 'help',
    description: 'General Information',
    execute(message, args) {
        let botHelpEmbedMessage = new Discord.RichEmbed()
        .setDescription("General Commands")
        .setColor("#15f153")
        return message.channel.send(botHelpEmbedMessage);
    }
}