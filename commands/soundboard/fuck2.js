const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class fuck2 extends Command {
	constructor(client) {
		super(client, {
			name: 'fuck2',
			group: 'soundboard collection',
			memberName: 'fuck2',
			description: 'Bot say you need to fuck off I said fuck off three fucks you are out!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/fuck2.mp3')
    }
};