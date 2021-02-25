const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class fakenews extends Command {
	constructor(client) {
		super(client, {
			name: 'fakenews',
			group: 'soundboard collection',
			memberName: 'fakenews',
			description: 'Bot say you are fake news!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/fakenews.mp3')
    }
};