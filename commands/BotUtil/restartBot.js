const { Command } = require('discord.js-commando');

module.exports = class JoinVoiceChannelCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'restart',
			group: 'bot utility',
			memberName: 'restart',
			description: 'restart the bot.',
		});
	}

	async run(message) {
        process.exit
        return message.say('Restarting bot.');
	}
}