const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class yappa extends Command {
	constructor(client) {
		super(client, {
			name: 'yappa',
			group: 'soundboard collection',
			memberName: 'yappa',
			description: 'Bot say yappa yappa yappa',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/yappa.mp3')
    }
};