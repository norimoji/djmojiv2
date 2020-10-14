const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'lying',
			group: 'soundboard collection',
			memberName: 'lying',
			description: 'Bot say why the fuck you lying.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/lying.mp3')
    }
};