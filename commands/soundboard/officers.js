const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class officers extends Command {
	constructor(client) {
		super(client, {
			name: 'officers',
			group: 'soundboard collection',
			memberName: 'officers',
			description: 'Bot say officers I have commited no offense!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/officers.mp3')
    }
};