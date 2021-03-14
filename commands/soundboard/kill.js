const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class kill extends Command {
	constructor(client) {
		super(client, {
			name: 'kill',
			group: 'soundboard collection',
			memberName: 'kill',
			description: 'Bot say I gotta kill you I know I know!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/kill.mp3')
    }
};