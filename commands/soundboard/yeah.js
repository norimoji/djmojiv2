const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class yeah extends Command {
	constructor(client) {
		super(client, {
			name: 'yeah',
			group: 'soundboard collection',
			memberName: 'yeah',
			description: 'Bot says yeah boy.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/yeah.mp3')
    }
};