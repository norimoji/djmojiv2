const { Command } = require('discord.js-commando');
const reaction = require('./reaction');
const fs = require('fs')
const path = require('path')


module.exports = class meat extends Command {
	constructor(client) {
		super(client, {
			name: 'shocked',
			group: 'reaction command',
			memberName: 'shocked',
			description: 'Demon slayer - Zenitsu Agatsuma shocked face gif',
		});
	}

	run(message){
		const shocked = new reaction(this.client)
        shocked.run(message,'./commands/reactions/expressions/zen.gif')
    }
};