const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class why extends Command {
	constructor(client) {
		super(client, {
			name: 'why',
			group: 'soundboard collection',
			memberName: 'why',
			description: 'Bot says why man?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/why.mp3')
    }
};