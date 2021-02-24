const { Command } = require('discord.js-commando');

const availableVoiceServer = new Map();

module.exports = class findUsers extends Command {
	constructor(client) {
		super(client, {
			name: 'find',
			group: 'bot utility',
			memberName: 'find',
			description: 'Bot finds users in voice channel.',
		});
	}

	run(guildName, voiceChannelID) {
		availableVoiceServer.set(guildName,voiceChannelID)
	}

	showAll(){
		availableVoiceServer.forEach(() => {
		})
	}

	getMemberVoiceLocation(message){
		const guildName = availableVoiceServer.get(message)
		return guildName
	}

	getBotVoiceLocation(message){
		message.guild.voiceStates.cache.forEach((bot) => {
			if(`${bot.id}`.valueOf(561896933879185431)){
				return `${bot.channelID}`
			}
		})
	}

	botVoiceLocation(message){
		message.guild.voiceStates.cache.forEach((bot) => {
			if(`${bot.id}`.valueOf(561896933879185431)){
				return true
			}
		})
	}

	getBotToLeave(message,channelID){
		const guildName = availableVoiceServer.get(channelID)
		message.guild.voiceStates.cache.forEach((bot) => {
			if(`${bot.id}`.valueOf(`561896933879185431`)){ //need to somehow change this to the voicechannel size so that the bot can see if there only 1 person left then he will quit
				this.client.voice.connections.forEach((bot) => {
					if(`${bot.voice.channelID}`.valueOf(channelID)){
						bot.voice.channel.leave()
					
					}
				})
			}
		})
	}

	getUserLocation(message){
		return availableVoiceServer.get(message)
	}

	getGuildName(message){

	}

}


