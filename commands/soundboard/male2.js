const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class male2 extends Command {
	constructor(client) {
		super(client, {
			name: 'male2',
			group: 'soundboard collection',
			memberName: 'male2',
			description: 'Bot say male sound',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/male2.mp3')
    }
};