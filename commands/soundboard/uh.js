const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class uh extends Command {
	constructor(client) {
		super(client, {
			name: 'uh',
			group: 'soundboard collection',
			memberName: 'uh',
			description: 'Bot say uh uh uh!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/uh.mp3')
    }
};