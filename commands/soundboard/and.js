const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class and extends Command {
	constructor(client) {
		super(client, {
			name: 'and',
			group: 'soundboard collection',
			memberName: 'and',
			description: 'Bot say and you sir... are you ready to receive my limp penis?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/and.mp3')
    }
};