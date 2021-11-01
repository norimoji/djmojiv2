const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class fuck3 extends Command {
	constructor(client) {
		super(client, {
			name: 'fuck3',
			group: 'soundboard collection',
			memberName: 'fuck3',
			description: 'Bot say you fucking lil bastard!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/fuck3.mp3')
    }
};