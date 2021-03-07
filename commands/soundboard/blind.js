const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class blind extends Command {
	constructor(client) {
		super(client, {
			name: 'blind',
			group: 'soundboard collection',
			memberName: 'blind',
			description: 'Bot say I'm legally blind',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/blind.mp3')
    }
};