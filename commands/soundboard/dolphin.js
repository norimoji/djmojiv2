const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'dolphin',
			group: 'soundboard collection',
			memberName: 'dolphin',
			description: 'Bot make Dolphin sounds.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/dolphin.mp3')
    }
};