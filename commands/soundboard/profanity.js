const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'profanity',
			group: 'soundboard collection',
			memberName: 'profanity',
			description: 'Bot says watch your profanity.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/profanity.mp3')
    }
};