const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class highway extends Command {
	constructor(client) {
		super(client, {
			name: 'highway',
			group: 'soundboard collection',
			memberName: 'highway',
			description: 'Bot say Catch me like a rat on the highway.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/highway.mp3')
    }
};