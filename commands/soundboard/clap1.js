const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class clap1 extends Command {
	constructor(client) {
		super(client, {
			name: 'clap1',
			group: 'soundboard collection',
			memberName: 'clap1',
			description: 'Bot say clapping sound.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/clap.mp3')
    }
};
