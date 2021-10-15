const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class waa extends Command {
	constructor(client) {
		super(client, {
			name: 'waa',
			group: 'soundboard collection',
			memberName: 'waa',
			description: 'Bot say waa!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/waa.mp3')
    }
};
