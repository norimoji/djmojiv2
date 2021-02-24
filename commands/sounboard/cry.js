const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class cry extends Command {
	constructor(client) {
		super(client, {
			name: 'cry',
			group: 'soundboard collection',
			memberName: 'cry',
			description: 'Bot say eh eh',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/cry.mp3')
    }
};