const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'haiya2',
			group: 'soundboard collection',
			memberName: 'haiya2',
			description: 'Bot say haiya.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/haiya2.mp3')
    }
};