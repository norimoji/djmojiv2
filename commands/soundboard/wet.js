const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class wet extends Command {
	constructor(client) {
		super(client, {
			name: 'wet',
			group: 'soundboard collection',
			memberName: 'wet',
			description: 'Bot makes wet fart noise',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/wet.mp3')
    }
};