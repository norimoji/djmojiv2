const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
module.exports = {
    name:'leave',
    execute(message, args) {
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.leave();
    return message.reply('See ya!');
    }
}