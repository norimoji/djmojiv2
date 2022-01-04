const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class laughed extends Command {
	constructor(client) {
		super(client, {
			name: 'laughed',
			group: 'soundboard collection',
			memberName: 'laughed',
			description: 'Bot say you all laughed at me, but you are not laughing now are you.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/laughed.mp3')
    }
};