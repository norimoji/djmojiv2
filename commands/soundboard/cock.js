const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class cock extends Command {
	constructor(client) {
		super(client, {
			name: 'cock',
			group: 'soundboard collection',
			memberName: 'cock',
			description: 'Bot say nice cock.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/cock.mp3')
    }
};
