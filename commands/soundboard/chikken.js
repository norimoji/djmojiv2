const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class chikken extends Command {
	constructor(client) {
		super(client, {
			name: 'chikken',
			group: 'soundboard collection',
			memberName: 'chikken',
			description: 'Bot say chikken burger and chips.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/chikken.mp3')
    }
};