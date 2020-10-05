const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'abdi1',
			group: 'soundboard collection',
			memberName: 'abdi',
			description: 'Bot say lucky bastard haha haha ha you piece of shit you lost and you quit you BITCH!',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/abdi1.mp3')
    }
};