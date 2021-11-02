const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class wae extends Command {
	constructor(client) {
		super(client, {
			name: 'wae',
			group: 'soundboard collection',
			memberName: 'wae',
			description: 'Bot say do you know da wae?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/wae.mp3')
    }
};
