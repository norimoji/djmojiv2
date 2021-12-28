const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class bong1 extends Command {
	constructor(client) {
		super(client, {
			name: 'bong1',
			group: 'soundboard collection',
			memberName: 'bong1',
			description: 'Bot say fuck your life ping bong.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/bong1.mp3')
    }
};