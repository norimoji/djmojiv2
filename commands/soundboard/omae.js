const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class omae extends Command {
	constructor(client) {
		super(client, {
			name: 'omae',
			group: 'soundboard collection',
			memberName: 'omae',
			description: 'Bot say Omae wa mou shindeiru.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/Omae wa mou.mp3')
    }
};