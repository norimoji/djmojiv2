const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class blind extends Command {
	constructor(client) {
		super(client, {
			name: 'problems',
			group: 'soundboard collection',
			memberName: 'problems',
			description: 'Bot say I dont want peace, I want problems always!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/problems.mp3')
    }
};
