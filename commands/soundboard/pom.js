const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class pom extends Command {
	constructor(client) {
		super(client, {
			name: 'pom',
			group: 'soundboard collection',
			memberName: 'pom',
			description: 'Bot says give me pom pom give me pom pom girl.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/pom.mp3')
    }
};