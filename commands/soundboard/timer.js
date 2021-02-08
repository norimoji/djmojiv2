const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class timer extends Command {
	constructor(client) {
		super(client, {
			name: 'timer',
			group: 'soundboard collection',
			memberName: 'timer',
			description: 'Bot plays the countdown tune.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/timer.mp3')
    }
};