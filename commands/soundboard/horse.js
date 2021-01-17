const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'horse',
			group: 'soundboard collection',
			memberName: 'horse',
			description: 'Bot make horse sounds.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/horse.mp3')
    }
};