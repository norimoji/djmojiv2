const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'nonce',
			group: 'soundboard collection',
			memberName: 'nonce',
			description: 'Bot say Big fucking strokey nonce!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/nonce.mp3')
    }
};