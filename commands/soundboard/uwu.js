const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class uwu extends Command {
	constructor(client) {
		super(client, {
			name: 'uwu',
			group: 'soundboard collection',
			memberName: 'uwu',
			description: 'Bot say uwu',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/uwu.mp3')
    }
};