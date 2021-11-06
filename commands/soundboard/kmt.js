const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class kmt extends Command {
	constructor(client) {
		super(client, {
			name: 'kmt',
			group: 'soundboard collection',
			memberName: 'kmt',
			description: 'Bot makes kmt noise',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/kmt.mp3')
    }
};