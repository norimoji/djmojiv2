const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class fart1 extends Command {
	constructor(client) {
		super(client, {
			name: 'fart1',
			group: 'soundboard collection',
			memberName: 'fart1',
			description: 'Bot farts x6',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/fart1.mp3')
    }
};
