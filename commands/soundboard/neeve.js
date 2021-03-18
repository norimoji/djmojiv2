const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class neeve extends Command {
	constructor(client) {
		super(client, {
			name: 'neeve',
			group: 'soundboard collection',
			memberName: 'neeve',
			description: 'Bot say neeve-nanna.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/neeve.mp3')
    }
};