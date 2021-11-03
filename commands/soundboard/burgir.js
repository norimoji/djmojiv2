const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class burgir extends Command {
	constructor(client) {
		super(client, {
			name: 'burgir',
			group: 'soundboard collection',
			memberName: 'burgir',
			description: 'Bot say burgir.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/burgir.mp3')
    }
};