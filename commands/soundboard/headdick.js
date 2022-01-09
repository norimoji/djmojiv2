const { Command } = require('discord.js-commando');
const soundboard = require('./soundboardMaster');

module.exports = class headdick extends Command {
	constructor(client) {
		super(client, {
			name: 'headdick',
			group: 'soundboard collection',
			memberName: 'headdick',
			description: 'Bot says headdick me.',
		});
	}

	async run(message){
		var playSound = new soundboard(this.client)
        playSound.run(message,'./sounds/headdick.mp3')
    }
};
