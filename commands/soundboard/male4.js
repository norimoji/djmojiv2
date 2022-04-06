const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class male4 extends Command {
	constructor(client) {
		super(client, {
			name: 'male4',
			group: 'soundboard collection',
			memberName: 'male4',
			description: 'Bot say male sound',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/male4.mp3')
    }
};