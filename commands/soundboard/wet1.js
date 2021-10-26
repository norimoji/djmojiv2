const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class wet1 extends Command {
	constructor(client) {
		super(client, {
			name: 'wet1',
			group: 'soundboard collection',
			memberName: 'wet1',
			description: 'Bot makes wet fart noise version 2',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/wet1.mp3')
    }
};