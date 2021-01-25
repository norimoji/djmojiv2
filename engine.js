require('dotenv').config();
const { VoiceChannel, DiscordAPIError } = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const { sup } = require('ffmpeg-static');
const path = require('path');
const soundboard = require('./commands/soundboard/soundboardMaster');
const findUsers = require('./commands/BotUtil/findUsersInVoiceChannel');

const client = new CommandoClient({
	commandPrefix: process.env.PREFIX,
	owner: process.env.OWNER,
	unknownCommandResponse: true,
	token: process.env.BOT_TOKEN
});

var availableServer = new findUsers(client)
client.registry
	.registerDefaultTypes()
	.registerGroups([
		['bot utility', 'Bot Utility'],
		['music command', 'Music Command'],
		['soundboard collection', 'Soundboard Collection'],
		['reaction command', 'Reaction Command']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	client.user.setActivity('with Development');
	
	console.log("Started")
    client.guilds.cache.forEach((guild) => {
     //List all channels
        guild.channels.cache.forEach((channel) => {
			if(`${channel.type}`.match('(voice)')){
				availableServer.run(`${guild.name}`,`${channel.id}`)
			}
		})
	})
	availableServer.showAll();
});

client.on('voiceStateUpdate', (oldVoiceState, newVoiceState) => {

	if (newVoiceState.channel) { // The member connected to a channel. 
		if(newVoiceState.selfMute == false && newVoiceState.selfDeaf == false){
			if(oldVoiceState.selfMute == false && oldVoiceState.selfDeaf == false){
				if(newVoiceState.channel.members.size >=2){
					var playSound = new soundboard(client)
					playSound.run(newVoiceState,'./sounds/ohyeah.mp3')
				}
			}
		}	
	} else if (oldVoiceState.channel) { // The member disconnected from a channel.
		if(oldVoiceState.channel.members.size = 1 && oldVoiceState.channel.members.has(`561896933879185431`)){
			const activeVoiceChannel = availableServer.getMemberVoiceLocation(newVoiceState.guild.name)
			availableServer.getBotToLeave(newVoiceState,activeVoiceChannel)	
		}
	}
})

client.on('error', console.error);

client.login(process.env.BOT_TOKEN);

