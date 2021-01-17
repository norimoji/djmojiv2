const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'nice',
			group: 'soundboard collection',
			memberName: 'nice',
			description: 'Bot make nice sounds.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/nice.mp3')
    }
};