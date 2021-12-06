const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class uwu1 extends Command {
	constructor(client) {
		super(client, {
			name: 'uwu1',
			group: 'soundboard collection',
			memberName: 'uwu1',
			description: 'Bot say uwu1',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/uwu1.mp3')
    }
};