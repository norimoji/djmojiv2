const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class male3 extends Command {
	constructor(client) {
		super(client, {
			name: 'male3',
			group: 'soundboard collection',
			memberName: 'male3',
			description: 'Bot say male sound',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/male3.mp3')
    }
};