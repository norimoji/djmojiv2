const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'yds',
			group: 'soundboard collection',
			memberName: `you don't say`,
			description: `Bot say you don't say.`,
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/yds.mp3')
    }
};