const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class onyon extends Command {
	constructor(client) {
		super(client, {
			name: 'onyon',
			group: 'soundboard collection',
			memberName: 'onyon',
			description: 'Bot say onyon.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/onyon.mp3')
    }
};