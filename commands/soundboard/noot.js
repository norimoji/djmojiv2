const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class noot extends Command {
	constructor(client) {
		super(client, {
			name: 'noot',
			group: 'soundboard collection',
			memberName: 'noot',
			description: 'Bot say noot noot',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/noot.mp3')
    }
};