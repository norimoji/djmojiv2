const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'plane',
			group: 'soundboard collection',
			memberName: 'plane',
			description: 'Bot make plane sounds.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/plane.mp3')
    }
};