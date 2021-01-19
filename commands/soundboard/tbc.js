const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class tbc extends Command {
	constructor(client) {
		super(client, {
			name: 'tbc',
			group: 'soundboard collection',
			memberName: 'tbc',
			description: 'Bot plays Yes - Roundabout.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/tbc.mp3')
    }
};