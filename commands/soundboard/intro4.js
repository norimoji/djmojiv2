const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class intro4 extends Command {
	constructor(client) {
		super(client, {
			name: 'intro4',
			group: 'soundboard collection',
			memberName: 'intro4',
			description: 'Bot plays Teriyaki Boy Tokyo Drift',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/intro4.mp3')
    }
};
