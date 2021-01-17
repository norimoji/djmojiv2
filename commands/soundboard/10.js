const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: '10',
			group: 'soundboard collection',
			memberName: '10',
			description: 'Bot say that's a 10!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/10.mp3')
    }
};