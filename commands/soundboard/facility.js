const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class facility extends Command {
	constructor(client) {
		super(client, {
			name: 'facility',
			group: 'soundboard collection',
			memberName: 'facility',
			description: 'Bot say I dont think you have the facilities for that big man.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/facility.mp3')
    }
};