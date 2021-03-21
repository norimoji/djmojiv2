const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class judo extends Command {
	constructor(client) {
		super(client, {
			name: 'judo',
			group: 'soundboard collection',
			memberName: 'judo',
			description: 'Bot say ah yes I see you know your judo well.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/judo.mp3')
    }
};