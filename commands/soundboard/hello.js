const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class hello extends Command {
	constructor(client) {
		super(client, {
			name: 'hello',
			group: 'soundboard collection',
			memberName: 'hello',
			description: 'Bot say Duh Hello?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/hello.mp3')
    }
};