const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'eh',
			group: 'soundboard collection',
			memberName: 'eh',
			description: 'Bot says eh?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/eh.mp3')
    }
};