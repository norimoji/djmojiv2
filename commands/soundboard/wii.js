const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class wii extends Command {
	constructor(client) {
		super(client, {
			name: 'wii',
			group: 'soundboard collection',
			memberName: 'wii',
			description: 'Bot plays the wii theme.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/wii.mp3')
    }
};