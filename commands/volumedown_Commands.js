const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
module.exports = {
    name:'vold',
    execute(message, args) {
        let botHelpEmbedMessage = new Discord.RichEmbed()
        .setColor("#15f153")
    
        return message.channel.send(botHelpEmbedMessage)
    }
}