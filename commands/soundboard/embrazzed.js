const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class embrazzed extends Command {
	constructor(client) {
		super(client, {
			name: 'embrazzed',
			group: 'soundboard collection',
			memberName: 'embrazzed',
			description: 'Bot say Are you not ashamed of yourself, are you not embrazzed...',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/embrazzed.mp3')
    }
};