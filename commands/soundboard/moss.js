const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class moss extends Command {
	constructor(client) {
		super(client, {
			name: 'moss',
			group: 'soundboard collection',
			memberName: 'moss',
			description: 'Bot say moss moss moss moss',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/moss.mp3')
    }
};