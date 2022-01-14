const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class yeah1 extends Command {
	constructor(client) {
		super(client, {
			name: 'yeah1',
			group: 'soundboard collection',
			memberName: 'yeah1',
			description: 'Bot say yeah (deeply).',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/yeah1.mp3')
    }
};