const { DiscordAPIError } = require('discord.js');
const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class helpSoundboardCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'helpsound',
			group: 'bot utility',
			memberName: 'helpsound',
			description: 'Bot sends you help regarding Soundboard functionality.',
		});
	}

	async run(message) {
		const embed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Available Commands in ' + message.guild.name)
		.setDescription('to use one of the commands below use "!" follow by a command to execute.')
		.attachFiles(['./commands/BotUtil/thumbnail1.png'])
		// .setImage('attachment://thumbnail1.png')
		embed.setTimestamp()
		embed.setFooter('Enjoy using DJ Moji!')
		message.author.send(embed)
		let text = ""
		let number = 0
		this.client.registry.findGroups('soundboard collection').forEach((fields) => {
			fields.commands.forEach(cmds => {
				number + 1
				if(text.length < 1900){
					text = text.concat(number++ + '. '+ `**${cmds.name}:** - ${cmds.description}` + '\n')
				}else{
					message.author.send(text)
					return text = ""
				}
			})

		})
		message.author.send(text)
	}

	listSoundboardCommands(message){
		let text = ""
		let number = 0
		this.client.registry.findGroups('soundboard collection').forEach((fields) => {
			fields.commands.forEach(cmds => {
				if(text.length < 1900){
					text = text.concat(number++ + '. ' + `**${cmds.name}:** - ${cmds.description}` + '\n')
				}else{
					message.author.send(text)
					return text = ""
				}
			})

		})
		message.author.send(text)
	}

	getSoundBoard(message){
		this.client.registry.findGroups('soundboard collection').forEach((fields) => {
			fields.commands.forEach(cmds => {
				return cmds.name
			})
		})
	}
}