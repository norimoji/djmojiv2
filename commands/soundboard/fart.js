const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class fart extends Command {
	constructor(client) {
		super(client, {
			name: 'fart',
			group: 'soundboard collection',
			memberName: 'fart',
			description: 'Bot fart',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/fart.mp3')
    }
};
