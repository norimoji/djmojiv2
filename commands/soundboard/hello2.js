const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class hellothere extends Command {
	constructor(client) {
		super(client, {
			name: 'hello2',
			group: 'soundboard collection',
			memberName: 'hello2',
			description: 'Bot says Obi-wan Hello there?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/hello2.mp3')
    }
};