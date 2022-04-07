const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class fgt extends Command {
	constructor(client) {
		super(client, {
			name: 'fgt',
			group: 'soundboard collection',
			memberName: 'fgt',
			description: 'Bot say you are a fagget',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/fgt.mp3')
    }
};