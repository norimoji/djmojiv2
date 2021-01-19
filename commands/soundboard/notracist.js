const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class notracist extends Command {
	constructor(client) {
		super(client, {
			name: 'notracist',
			group: 'soundboard collection',
			memberName: 'notracist',
			description: 'Bot say its not racist at all',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/notracist.mp3')
    }
};