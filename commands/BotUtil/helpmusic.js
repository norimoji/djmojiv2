const { DiscordAPIError } = require('discord.js');
const { Command } = require('discord.js-commando');
const Discord = require('discord.js');


module.exports = class helpMusicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'helpmusic',
			group: 'bot utility',
			memberName: 'helpmusic',
			description: 'Bot sends you help regarding Music functionality.',
		});
	}

	async run(message) {
		const embed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Available Commands in ' + message.guild.name)
		.setDescription('to use one of the commands below use "!" follow by a command to execute.')
		.attachFiles(['./commands/BotUtil/thumbnail1.png'])
		.setImage('attachment://thumbnail1.png')
		this.client.registry.findGroups('music command').forEach((fields) => {
			fields.commands.forEach((cmds) => {
				embed.addFields(
					{ name: `${cmds.name}`, value: `${cmds.description}` })
			})
		})
		embed.setTimestamp()
		embed.setFooter('Enjoy using DJ Moji!')
		message.author.send(embed)
	}
}