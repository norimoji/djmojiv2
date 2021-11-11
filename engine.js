require('dotenv').config();
const { VoiceChannel, DiscordAPIError, MessageCollector, MessageFlags, Message } = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const { sup } = require('ffmpeg-static');
const path = require('path');
const soundboard = require('./commands/soundboard/soundboardMaster');
const findUsers = require('./commands/BotUtil/findUsersInVoiceChannel');
const mongo = require('./mongo')
const setupIntro = require('./commands/BotUtil/setupIntro');
const { set } = require('mongoose');
const { MongoClient } = require('mongodb');

const client = new CommandoClient({
	commandPrefix: process.env.PREFIX,
	owner: process.env.OWNER,
	unknownCommandResponse: true,
	token: process.env.BOT_TOKEN
});

var availableServer = new findUsers(client)
var setup = new setupIntro(client)
client.registry
	.registerDefaultTypes()
	.registerGroups([
		['bot utility', 'Bot Utility'],
		['music command', 'Music Command'],
		['soundboard collection', 'Soundboard Collection'],
		['reaction command', 'Reaction Command']
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
		unknownCommand: false,
		help: false,
	})
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', async () => {
	client.user.setActivity('with Development');
	await mongo().then(mongoose =>{
		try{
			console.log('Connected to mongo!')
		} finally {
			mongoose.connection.close()
		}
	})

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
	setup.loadsDB()
	
});

client.on('voiceStateUpdate', (oldVoiceState, newVoiceState) => {
	if (newVoiceState.channel) { // The member connected to a channel. 
		if(newVoiceState.mute == false && newVoiceState.deaf == false){
			if(oldVoiceState.mute == true || oldVoiceState.deaf == true){
				
			}else if(newVoiceState.channel.members.size >=2){
				var playSound = new soundboard(client)
				playSound.run(newVoiceState,'./sounds/'+ setup.getUserIntro(newVoiceState.guild.id, newVoiceState.member.id) +'.mp3')
			}
		}
	} else if (oldVoiceState.channel) { // The member disconnected from a channel.
		if(oldVoiceState.channel.members.size == 1 && oldVoiceState.channel.members.has(`561896933879185431`)){
			const activeVoiceChannel = availableServer.getMemberVoiceLocation(newVoiceState.guild.name)
			availableServer.getBotToLeave(newVoiceState,activeVoiceChannel)	
		}
	}
})

client.on('message', m => {
	if(m.toString() == 'fuck u kani'){
		var playSound = new soundboard(client)
				playSound.run(m,'./sounds/wet1.mp3')
	}
})

client.on('error', console.error);

client.login(process.env.BOT_TOKEN);


