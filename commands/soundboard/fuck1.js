const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class fuck1 extends Command {
	constructor(client) {
		super(client, {
			name: 'fuck1',
			group: 'soundboard collection',
			memberName: 'fuck1',
			description: 'Bot say you need to fuck off!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/fuck1.mp3')
    }
};