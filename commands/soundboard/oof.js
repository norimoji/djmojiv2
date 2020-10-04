const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'oof',
			group: 'soundboard collection',
			memberName: 'oof',
			description: 'Bot say oof.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/oof.mp3')
    }
};