const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class running2 extends Command {
	constructor(client) {
		super(client, {
			name: 'running2',
			group: 'soundboard collection',
			memberName: 'running2',
			description: 'Bot say are you running? are you not running?',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/rurunning.mp3')
    }
};