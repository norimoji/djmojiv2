const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class bs extends Command {
	constructor(client) {
		super(client, {
			name: 'bs',
			group: 'soundboard collection',
			memberName: 'bs',
			description: 'Bot say you see this guy, number 1 bullshit guy.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
		playSound.run(message,'./sounds/bs.mp3')
    }
};