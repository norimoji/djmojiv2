const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'violin',
			group: 'soundboard collection',
			memberName: 'violin',
			description: 'Bot plays sad violin song.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/violin.mp3')
    }
};