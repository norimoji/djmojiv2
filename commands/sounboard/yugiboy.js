const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class yugi extends Command {
	constructor(client) {
		super(client, {
			name: 'yugi',
			group: 'soundboard collection',
			memberName: 'yugiboy',
			description: 'Bot say yugiboy.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/yugi.mp3')
    }
};