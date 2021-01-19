const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class nuts extends Command {
	constructor(client) {
		super(client, {
			name: 'nuts',
			group: 'soundboard collection',
			memberName: 'nuts',
			description: 'Bot say deez nuts',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/nuts.mp3')
    }
};
