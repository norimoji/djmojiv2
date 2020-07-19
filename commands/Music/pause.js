const { Command } = require('discord.js-commando');
const play = require('./play');

module.exports = class pause extends Command {
	constructor(client) {
		super(client, {
			name: 'pause',
			group: 'music command',
			memberName: 'pause',
			description: 'Pause track.',
		});
    }

    async run(message){
		var pause = new play(this.client)
		pause.pauseTrack(message)
    }
	
}