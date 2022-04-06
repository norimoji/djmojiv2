const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class male extends Command {
	constructor(client) {
		super(client, {
			name: 'male',
			group: 'soundboard collection',
			memberName: 'male',
			description: 'Bot say male sound',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/male.mp3')
    }
};