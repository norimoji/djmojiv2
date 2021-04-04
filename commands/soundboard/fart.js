const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class fart extends Command {
	constructor(client) {
		super(client, {
			name: 'fart',
			group: 'soundboard collection',
			memberName: 'fart',
			description: 'Bot farts',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/farts.mp3')
    }
};