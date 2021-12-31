const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class heli extends Command {
	constructor(client) {
		super(client, {
			name: 'heli',
			group: 'soundboard collection',
			memberName: 'heli',
			description: 'Bot say Helicopter helicopter?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/heli.mp3')
    }
};