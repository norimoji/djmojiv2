const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'yrugae',
			group: 'soundboard collection',
			memberName: 'yrugae',
			description: 'Bot say why are you gae?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/yrugae.mp3')
    }
};