const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class guile extends Command {
	constructor(client) {
		super(client, {
			name: 'guile',
			group: 'soundboard collection',
			memberName: 'guile',
			description: 'Bot plays guile theme song from Street Fighter.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/guile.mp3')
    }
};