const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class emotional extends Command {
	constructor(client) {
		super(client, {
			name: 'emotional',
			group: 'soundboard collection',
			memberName: 'emotional',
			description: 'Bot say emotional damage.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/emotional.mp3')
    }
};