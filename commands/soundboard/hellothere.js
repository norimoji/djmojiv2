const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'hello',
			group: 'soundboard collection',
			memberName: 'hello',
			description: 'Bot says Obi-wan Hello there?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/hellothere.mp3')
    }
};