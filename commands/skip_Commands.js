const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const playCommand = require("./play_Commands.js");
module.exports = {
    name:'skip',
    execute(message, args) {
      const serverQueue = playCommand(message,args)
      console.log(serverQueue);
    }
}