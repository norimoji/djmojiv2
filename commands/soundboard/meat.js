const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'meat',
			group: 'soundboard collection',
			memberName: 'meat',
			description: 'Bot say meat.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/meat.mp3')
    }
};