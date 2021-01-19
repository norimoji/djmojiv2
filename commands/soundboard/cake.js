const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'cake',
			group: 'soundboard collection',
			memberName: 'fucked',
			description: 'Bot say oi that is not your cake you fat cunt!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/cake.mp3')
    }
};