const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'rurunning',
			group: 'soundboard collection',
			memberName: 'rurunning',
			description: 'Bot say are you running? are you not running?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/rurunning.mp3')
    }
};
