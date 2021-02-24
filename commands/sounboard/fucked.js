const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class fucked extends Command {
	constructor(client) {
		super(client, {
			name: 'fucked',
			group: 'soundboard collection',
			memberName: 'fucked',
			description: 'Bot say now you are fucked!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/fucked.mp3')
    }
};