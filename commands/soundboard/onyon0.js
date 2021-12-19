const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class onyon0 extends Command {
	constructor(client) {
		super(client, {
			name: 'onyon0',
			group: 'soundboard collection',
			memberName: 'onyon0',
			description: 'Bot say the full onyon.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/onyon0.mp3')
    }
};