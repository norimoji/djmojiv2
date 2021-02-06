const { DiscordAPIError } = require('discord.js');
const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class helpCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'help',
			group: 'bot utility',
			memberName: 'help',
			description: 'Bot sends you help.',
        });
	}

	async run(message) {
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
	        .setTitle('Available Commands in ' + message.guild.name)
            .setDescription('to use one of the commands below use "!" follow by a command to execute.')
            .attachFiles(['./commands/BotUtil/thumbnail1.png'])
	        .setImage('attachment://thumbnail1.png')
	        .addFields(
                { name: 'Bot Utility', value: 'use !helpbot' },
                { name: 'Music Command', value: 'use !helpmusic' },
                { name: 'Soundboard Command', value: 'use !helpsound' },
                { name: 'Reaction Command', value: 'use !helpreact' }
            )
            .setTimestamp()
            .setFooter('Enjoy using DJ Moji!')
            message.author.send(embed)   
    } 
}