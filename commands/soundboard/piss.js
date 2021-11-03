const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class piss extends Command {
	constructor(client) {
		super(client, {
			name: 'piss',
			group: 'soundboard collection',
			memberName: 'piss',
			description: 'Bot say are you taking the piss?!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/piss.mp3')
    }
};