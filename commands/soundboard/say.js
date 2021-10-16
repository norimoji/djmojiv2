const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class say extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			group: 'soundboard collection',
			memberName: 'say',
			description: 'Bot say What did he say?...',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/say.mp3')
    }
};