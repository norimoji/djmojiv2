const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class shutit1 extends Command {
	constructor(client) {
		super(client, {
			name: 'shutit1',
			group: 'soundboard collection',
			memberName: 'shutit',
			description: 'Bot say shut it please + KMT!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/shutit1.mp3')
    }
};