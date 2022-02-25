const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class creature extends Command {
	constructor(client) {
		super(client, {
			name: 'creature',
			group: 'soundboard collection',
			memberName: 'creature',
			description: 'Bot say disgusting black creatures get out of my sight.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/creature.mp3')
    }
};