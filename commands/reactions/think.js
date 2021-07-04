const { Command } = require('discord.js-commando');
const reaction = require('./reaction');
const fs = require('fs')
const path = require('path')


module.exports = class think extends Command {
	constructor(client) {
		super(client, {
			name: 'think',
			group: 'reaction command',
			memberName: 'think',
			description: 'Think meme from Invisible.',
		});
	}

	run(message){
		const think = new reaction(this.client)
        think.run(message,'./commands/reactions/expressions/think.png')
		message.channel.send('THINK, ' + message.content.substring(7) + ' THINK!')
    }
};
