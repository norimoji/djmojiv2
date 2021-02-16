const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class fuck extends Command {
	constructor(client) {
		super(client, {
			name: 'fuck',
			group: 'soundboard collection',
			memberName: 'fuck',
			description: 'Bot say Ah fuck, I cannot believe you done this.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/fuck.mp3')
    }
};
