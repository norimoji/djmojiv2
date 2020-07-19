const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class nani extends Command {
	constructor(client) {
		super(client, {
			name: 'nani',
			group: 'soundboard collection',
			memberName: 'nani',
			description: 'Bot say nani.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/nani.mp3')
    }
};