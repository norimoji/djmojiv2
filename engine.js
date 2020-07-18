require('dotenv').config();
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: process.env.PREFIX,
	owner: process.env.OWNER,
	unknownCommandResponse: true,
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['bot utility', 'Bot Utility'],
		['music command', 'Music Command'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));


client.once('ready', () => {
	client.user.setActivity('with Development');
	console.log("Started")
});

client.on('error', console.error);

client.login(process.env.BOT_TOKEN);
