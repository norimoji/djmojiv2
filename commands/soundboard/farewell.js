const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class farewell extends Command {
	constructor(client) {
		super(client, {
			name: 'farewell',
			group: 'soundboard collection',
			memberName: 'farewell',
			description: 'Bot say ta ta farewell',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/farewell.mp3')
    }
};