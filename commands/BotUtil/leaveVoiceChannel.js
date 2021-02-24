const { Command } = require('discord.js-commando');
const play = require('../Music/play')


module.exports = class leaveVoiceChannelCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'leave',
			group: 'bot utility',
			memberName: 'leave',
			description: 'Bot leave voice channel and ends all audio if playing.',
		});
	}

	async run(message) {
        if (this.client.voice.connections.size === 0) {
			return message.say('The bot is not a voice channel.');
        }else if(!message.member.voice.channel){
			return message.say('Please join the voice channel first before using this command')
        }else{
			var player = new play(this.client)
			player.clearPlayerOnLeave(message)
			this.client.user.setActivity('with Development')
			message.member.voice.channel.leave();
		}
	}
}
