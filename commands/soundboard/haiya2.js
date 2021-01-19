const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class haiya2 extends Command {
	constructor(client) {
		super(client, {
			name: 'haiya2',
			group: 'soundboard collection',
			memberName: 'haiya2',
			description: 'Bot say haiya version 2.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/haiya2.mp3')
    }
};