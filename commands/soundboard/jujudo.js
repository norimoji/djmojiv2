const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class jujudo extends Command {
	constructor(client) {
		super(client, {
			name: 'jujudo',
			group: 'soundboard collection',
			memberName: 'jujudo',
			description: 'Bot say ah yes I see you know your jujudo well.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/jujudo.mp3')
    }
};