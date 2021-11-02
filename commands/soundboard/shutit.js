const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class shutit extends Command {
	constructor(client) {
		super(client, {
			name: 'shutit',
			group: 'soundboard collection',
			memberName: 'shutit',
			description: 'Bot say shut it please!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/shutit.mp3')
    }
};