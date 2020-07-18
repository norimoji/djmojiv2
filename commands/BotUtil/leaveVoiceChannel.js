const { Command } = require('discord.js-commando');

module.exports = class JoinVoiceChannelCommand extends Command {
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
			message.member.voice.channel.leave();
		}
	}
}
