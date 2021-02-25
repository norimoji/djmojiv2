const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class haiya extends Command {
	constructor(client) {
		super(client, {
			name: 'haiya',
			group: 'soundboard collection',
			memberName: 'haiya',
			description: 'Bot say haiya.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/haiya.mp3')
    }
};