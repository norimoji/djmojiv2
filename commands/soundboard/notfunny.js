const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class notfunny extends Command {
	constructor(client) {
		super(client, {
			name: 'notfunny',
			group: 'soundboard collection',
			memberName: 'notfunny',
			description: 'Bot say I do not think you are funny.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/notfunny.mp3')
    }
};