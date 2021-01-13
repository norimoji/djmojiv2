const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'arh',
			group: 'soundboard collection',
			memberName: 'arh',
			description: 'Bot say arhhhhhhhhhhhhhh',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/arh.mp3')
		console.log(message)
    }
};
