const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class nogod extends Command {
	constructor(client) {
		super(client, {
			name: 'nogod',
			group: 'soundboard collection',
			memberName: 'nogod',
			description: 'Bot say no god no!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/nogod.mp3')
    }
};