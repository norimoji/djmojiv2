const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class penis extends Command {
	constructor(client) {
		super(client, {
			name: 'penis',
			group: 'soundboard collection',
			memberName: 'penis',
			description: 'Bot say get your hands of my penis!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/penis.mp3')
    }
};