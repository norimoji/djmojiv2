const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class baka extends Command {
	constructor(client) {
		super(client, {
			name: 'baka',
			group: 'soundboard collection',
			memberName: 'baka',
			description: 'Bot say BAKA!.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/Baka.mp3')
    }
};