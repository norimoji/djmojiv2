const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class mistake extends Command {
	constructor(client) {
		super(client, {
			name: 'mistake',
			group: 'soundboard collection',
			memberName: 'fakenews',
			description: 'Bot says I didn't mean to shoot him, but he caught me by suprise',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/mistake.mp3')
    }
};