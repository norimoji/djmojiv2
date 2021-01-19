const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class running extends Command {
	constructor(client) {
		super(client, {
			name: 'running',
			group: 'soundboard collection',
			memberName: 'running',
			description: 'Bot say why are you running? X2',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/running.mp3')
    }
};