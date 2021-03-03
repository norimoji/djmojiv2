const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class sauce extends Command {
	constructor(client) {
		super(client, {
			name: 'sauce',
			group: 'soundboard collection',
			memberName: 'sauce',
			description: 'Bot say where is the lamb sauce?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/sauce.mp3')
    }
};