const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class capacity extends Command {
	constructor(client) {
		super(client, {
			name: 'capacity',
			group: 'soundboard collection',
			memberName: 'capacity',
			description: 'Bot say I said we dont have the capcity.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/capacity.mp3')
    }
};