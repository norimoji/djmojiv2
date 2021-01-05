const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'normal',
			group: 'soundboard collection',
			memberName: 'normal',
			description: 'Bot says are you normal?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/normal.mp3')
    }
};