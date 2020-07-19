const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class yeetCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'yeet',
			group: 'soundboard collection',
			memberName: 'yeet',
			description: 'Bot say yeet.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/yeet.mp3')
    }
};