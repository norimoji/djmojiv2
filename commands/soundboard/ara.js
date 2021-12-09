const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class ara extends Command {
	constructor(client) {
		super(client, {
			name: 'ara',
			group: 'soundboard collection',
			memberName: 'ara',
			description: 'Bot say ara ara',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/ara.mp3')
    }
};