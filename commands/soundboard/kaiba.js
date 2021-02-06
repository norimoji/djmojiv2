const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class kaibaboy extends Command {
	constructor(client) {
		super(client, {
			name: 'kaiba',
			group: 'soundboard collection',
			memberName: 'kaibaboy',
			description: 'Bot say kaibaboy.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/kaiba.mp3')
    }
};