const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class nevee extends Command {
	constructor(client) {
		super(client, {
			name: 'nevee',
			group: 'soundboard collection',
			memberName: 'nevee',
			description: 'Bot say nevee_naaaa.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/nevee.mp3')
    }
};