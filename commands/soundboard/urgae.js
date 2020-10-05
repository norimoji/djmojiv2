const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'urgae',
			group: 'soundboard collection',
			memberName: 'urgae',
			description: 'Bot say you are gae.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/urgae.mp3')
    }
};