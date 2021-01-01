const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'jeff',
			group: 'soundboard collection',
			memberName: 'jeff',
			description: 'Bot say my name is jeff.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/jeff.mp3')
    }
};