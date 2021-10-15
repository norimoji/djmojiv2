const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class mf extends Command {
	constructor(client) {
		super(client, {
			name: 'mf',
			group: 'soundboard collection',
			memberName: 'mf',
			description: 'Bot say Hello Motherfucker!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/mf.mp3')
    }
};