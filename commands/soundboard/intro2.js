const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class intro2 extends Command {
	constructor(client) {
		super(client, {
			name: 'intro2',
			group: 'soundboard collection',
			memberName: 'intro2',
			description: 'Bot plays The Chase intro song',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/intro2.mp3')
    }
};