const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class bastard extends Command {
	constructor(client) {
		super(client, {
			name: 'bastard',
			group: 'soundboard collection',
			memberName: 'bastard',
			description: 'Bot say yah bastard!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/bastard.mp3')
    }
};