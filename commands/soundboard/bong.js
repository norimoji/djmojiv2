const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class bong extends Command {
	constructor(client) {
		super(client, {
			name: 'bong',
			group: 'soundboard collection',
			memberName: 'bong',
			description: 'Bot say ping bong.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/bong.mp3')
    }
};