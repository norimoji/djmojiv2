const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'wow',
			group: 'soundboard collection',
			memberName: 'wow',
			description: 'Bot say wow!.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/wow.mp3')
    }
};