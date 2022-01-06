const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class nuts1 extends Command {
	constructor(client) {
		super(client, {
			name: 'nuts1',
			group: 'soundboard collection',
			memberName: 'nuts1',
			description: 'Bot say Ah shit nuts ah double nuts I said it again.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/nuts1.mp3')
    }
};