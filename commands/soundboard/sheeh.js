const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class sheeh extends Command {
	constructor(client) {
		super(client, {
			name: 'sheeh',
			group: 'soundboard collection',
			memberName: 'sheeh',
			description: 'Bot say sheeh...',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/sheeh.mp3')
    }
};