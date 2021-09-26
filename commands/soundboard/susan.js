const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class susan extends Command {
	constructor(client) {
		super(client, {
			name: 'susan',
			group: 'soundboard collection',
			memberName: 'susan',
			description: 'Bot say Susan...Susan',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/susan.mp3')
    }
};