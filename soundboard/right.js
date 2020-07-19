const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class right extends Command {
	constructor(client) {
		super(client, {
			name: 'right',
			group: 'soundboard collection',
			memberName: 'right',
			description: 'Bot say right.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/right.mp3')
    }
};