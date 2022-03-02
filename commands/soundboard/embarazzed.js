const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class embrazzed extends Command {
	constructor(client) {
		super(client, {
			name: 'embarazzed',
			group: 'soundboard collection',
			memberName: 'embarazzed',
			description: 'Bot say Are you not ashamed of yourself, are you not embarazzed...',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/embarazzed.mp3')
    }
};
