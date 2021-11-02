const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class mouth extends Command {
	constructor(client) {
		super(client, {
			name: 'mouth',
			group: 'soundboard collection',
			memberName: 'mouth',
			description: 'Bot say your mouth is moving like a rat shut it please!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/mouth.mp3')
    }
};