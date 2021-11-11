const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class eye extends Command {
	constructor(client) {
		super(client, {
			name: 'eye',
			group: 'soundboard collection',
			memberName: 'eye',
			description: 'Bot sings one eye song.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/eye.mp3')
    }
};