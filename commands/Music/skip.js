const { Command } = require('discord.js-commando');
const play = require('./play');

module.exports = class skip extends Command {
	constructor(client) {
		super(client, {
			name: 'skip',
			group: 'music command',
			memberName: 'skip',
			description: 'Skip track.',
		});
    }

    async run(message){
		var skip = new play(this.client)
		skip.skipTrack(message)
    }
	
}