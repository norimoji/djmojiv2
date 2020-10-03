const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'itis',
			group: 'soundboard collection',
			memberName: 'itis',
			description: 'Bot say it is what it is.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/itis.mp3')
    }
};