const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class intro3 extends Command {
	constructor(client) {
		super(client, {
			name: 'intro3',
			group: 'soundboard collection',
			memberName: 'intro3',
			description: 'Bot plays Giorno theme song',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/intro3.mp3')
    }
};