const { Command } = require('discord.js-commando');
const play = require('./play');

module.exports = class stop extends Command {
	constructor(client) {
		super(client, {
			name: 'stop',
			group: 'music command',
			memberName: 'stop',
			description: 'Stops the music player.',
		});
    }

    async run(message){
		var stop = new play(this.client)
		stop.stopPlayer(message)
    }
	
}