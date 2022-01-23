const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class clap extends Command {
	constructor(client) {
		super(client, {
			name: 'clap',
			group: 'soundboard collection',
			memberName: 'clap',
			description: 'Bot say clapping sound.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/clap1.mp3')
    }
};
