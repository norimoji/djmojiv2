const { Command } = require('discord.js-commando');
const { MessageAttachment } = require('discord.js')

module.exports = class reactionCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'reaction',
			group: 'reaction command',
			memberName: 'reaction',
			description: 'Factory class',
		});
        
    }

    run(message,source){
        const attachment = new MessageAttachment(source)

        message.channel.send(attachment)
    }
};