const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'waiting',
			group: 'soundboard collection',
			memberName: 'waiting',
			description: 'Bot say now we play the waiting game.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/waitinggame.mp3')
    }
};