const { Command, util } = require('discord.js-commando');
const play = require('./play');
const { skipTrack } = require('./play');

module.exports = class skip extends Command {
	constructor(client) {
		super(client, {
			name: 'skip',
			group: 'music command',
			memberName: 'skip',
			description: 'Skip tracks',
		});
    }

    async run(message){
		var skip = new play(this.client)
		skip.skipTrack(message)
    }
	
}