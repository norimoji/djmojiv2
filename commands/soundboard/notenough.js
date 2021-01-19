const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class notenough extends Command {
	constructor(client) {
		super(client, {
			name: 'notenough',
			group: 'soundboard collection',
			memberName: 'notenough',
			description: 'Bot say I dont think you have the facilities for that big man.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/notenough.mp3')
    }
};