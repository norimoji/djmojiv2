const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");

bot.login(process.env.token);

bot.commands = new Discord.Collection();

bot.on("ready",async() => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Building in progress...");
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name,command);
}

bot.on("message", async message => {

    if(!message.content.startsWith(process.env.prefix)) return;

    const args = message.content.slice(process.env.prefix).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        bot.commands.get('help').execute(message,args);
    }else if(command === 'play'){
        bot.commands.get('play').execute(message,args);
    }else if(command === 'skip'){
        bot.commands.get('skip').execute(message,args);
    }else if(command === 'vold'){
        bot.commands.get('vold').execute(message,args);
    }else if(command === 'leave'){
        bot.commands.get('leave').execute(message,args);
    }else if(command === 'list'){
        bot.commands.get('list').execute(message,args);
    }


    // Use for bot reply's
    // if(incomingCommand === `${general_commands}hello`){
    //     return message.channel.send("Hello!");
    // }

    //  if(incomingCommand === `${general_command.prefix}help`){
        
    //     let setIcon = message.guild.displayAvatarURL;
    //     let 
    // }

    // if(incomingCommand === `${general_command.prefix}help`){
    //     let botAvatar = bot.user.displayAvatarURL;
    //     let botHelpEmbedMessage = new Discord.RichEmbed()
    //     .setDescription("General Commands")
    //     .setColor("#15f153")
    //     .setThumbnail(botAvatar)
    //     .addField("bot", bot.user.username);

    //     return message.channel.send(botHelpEmbedMessage);

    // }
});