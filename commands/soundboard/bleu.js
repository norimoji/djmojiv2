const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class bleu extends Command {
	constructor(client) {
		super(client, {
			name: 'bleu',
			group: 'soundboard collection',
			memberName: 'bleu',
			description: 'Bot say sacre bleu.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/bleu.mp3')
    }
};