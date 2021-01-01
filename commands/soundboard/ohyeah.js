const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'ohyeah',
			group: 'soundboard collection',
			memberName: 'ohyeah',
			description: 'Bot say oh yeah!.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/ohyeah.mp3')
    }
};