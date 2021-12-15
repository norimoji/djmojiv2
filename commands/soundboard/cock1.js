const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class cock1 extends Command {
	constructor(client) {
		super(client, {
			name: 'cock1',
			group: 'soundboard collection',
			memberName: 'cock1',
			description: 'Bot say perfect cock.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/cock1.mp3')
    }
};