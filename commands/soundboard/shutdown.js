const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class shutdown extends Command {
	constructor(client) {
		super(client, {
			name: 'shutdown',
			group: 'soundboard collection',
			memberName: 'shutdown',
			description: 'Bot say Shutdown!.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/shutdown.mp3')
    }
};