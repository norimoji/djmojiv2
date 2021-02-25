const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class countdown extends Command {
	constructor(client) {
		super(client, {
			name: 'countdown',
			group: 'soundboard collection',
			memberName: 'countdown',
			description: 'Bot plays the countdown song',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/countdown.mp3')
    }
};