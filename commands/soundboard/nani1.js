const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class nani1 extends Command {
	constructor(client) {
		super(client, {
			name: 'nani1',
			group: 'soundboard collection',
			memberName: 'nani1',
			description: 'Bot say naaaaaaaniiiiii.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/nani1.mp3')
    }
};