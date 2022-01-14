const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class ohyeah1 extends Command {
	constructor(client) {
		super(client, {
			name: 'ohyeah1',
			group: 'soundboard collection',
			memberName: 'ohyeah1',
			description: 'Bot say oh yeah (sexually).',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/ohyeah1.mp3')
    }
};