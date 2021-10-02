const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class defeat extends Command {
	constructor(client) {
		super(client, {
			name: 'defeat',
			group: 'soundboard collection',
			memberName: 'defeat',
			description: 'Bot say you think you can defeat me?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/defeat.mp3')
    }
};