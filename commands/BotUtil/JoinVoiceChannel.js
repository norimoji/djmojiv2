const { Command } = require('discord.js-commando');

module.exports = class JoinVoiceChannelCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'join',
			group: 'bot utility',
			memberName: 'join',
			description: 'Bot joins voice channel.',
		});
	}

	async run(message) {
        if (message.member.voice.channel) {
             message.member.voice.channel.join();
        }else{
            return message.say('Please join a voice channel, before using this command.');
        }
	}
}