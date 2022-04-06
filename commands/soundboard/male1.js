const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class male1 extends Command {
	constructor(client) {
		super(client, {
			name: 'male1',
			group: 'soundboard collection',
			memberName: 'male1',
			description: 'Bot say male sound',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/male1.mp3')
    }
};