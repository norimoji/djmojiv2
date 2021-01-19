const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class intro extends Command {
	constructor(client) {
		super(client, {
			name: 'intro',
			group: 'soundboard collection',
			memberName: 'intro',
			description: 'Bot play Attack on Titan S1 opening song',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/intro.mp3')
    }
};