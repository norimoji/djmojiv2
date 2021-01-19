const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class disgusting extends Command {
	constructor(client) {
		super(client, {
			name: 'disgusting',
			group: 'soundboard collection',
			memberName: 'disgusting',
			description: 'Bot say well it was fucking one of you... DISGUSTING.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/disgusting.mp3')
    }
};