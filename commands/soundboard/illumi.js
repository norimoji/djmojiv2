const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'illumi',
			group: 'soundboard collection',
			memberName: 'illumi',
			description: 'Bot plays illuminat theme.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/illumi.mp3')
    }
};