const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class look extends Command {
	constructor(client) {
		super(client, {
			name: 'look',
			group: 'soundboard collection',
			memberName: 'look',
			description: 'Bot say came on have a look!.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/look.mp3')
    }
};