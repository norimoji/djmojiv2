const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class naughty extends Command {
	constructor(client) {
		super(client, {
			name: 'naughty',
			group: 'soundboard collection',
			memberName: 'naughty',
			description: 'Bot say you teasing me naughty naughty.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/naughty.mp3')
    }
};