const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class waa1 extends Command {
	constructor(client) {
		super(client, {
			name: 'waa1',
			group: 'soundboard collection',
			memberName: 'and',
			description: 'Bot say wawawaaa!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/waa1.mp3')
    }
};