const { Command } = require('discord.js-commando');
const soundboard = require('../soundboard/soundboardMaster');
const discord = require('discord.js')
const helpsoundboard = require('./helpsound')
const fs = require('fs');
const { throws } = require('assert');

const guilds = new Map()
const channelMembers = new Map()

module.exports = class setupIntro extends Command {
	constructor(client) {
		super(client, {
			name: 'setupintro',
			group: 'soundboard collection',
			memberName: 'setupintro',
			description: 'Setup up your own custom intro',
		});
		}  

		async run(message){
				
			if(message.channel.type != 'dm'){
				message.author.send('Please select one of the custom intro from below - to select type !setupintro (X) - X being a number without the brackets.') 
				var listSB = new helpsoundboard(this.client)
				listSB.listSoundboardCommands(message)
		
			}
			
			if(message.channel.type == 'dm'){	
				console.log(message.content);	

				let newData = {
					name: message.author.username,
					intro: message.content.substring(12)					
				};
				
				var obj = {
					table: []
				 }

				fs.readFile('./commands/BotUtil/soundIntro.json', 'utf8', (err,data) => {
					if(err){
						console.log(err)
					}else{
						obj = JSON.parse(data)
						obj.table.join({
							name: message.author.username,
							intro: message.content.substring(12)					
						})
						fs.writeFile('./commands/BotUtil/soundIntro.json',JSON.stringify(obj),'utf8')
						
					}		

				})
				// fs.appendFile('./commands/BotUtil/soundIntro.json', JSON.stringify(newData,null,2), 'utf8', err => {
				// if (err) console.error(err)
				// })

				

				// fs.writeFileSync('./commands/BotUtil/soundIntro.json', JSON.stringify(user,null,2), (err) =>{
				// 	if(err) throw err
				// 	console.log()
				// })
				
			}

			// if(!fs.existsSync('./commands/BotUtil/soundIntro.json')) 
			// fs.writeFileSync('./commands/BotUtil/soundIntro.json'), JSON.stringify({}), err => {
			// 		if(err){
			// 			Message.channel.send(err)
			// 		}
			// 	}

			// if(!soundIntroDataBase[message.author.username]){
			// 	console.log('to the moon')
			// 	soundIntroDataBase[message.channel.name] = {
			// 		soundIntroDataBase: message.content.slice(12),
			// 		hi: message.author.toString()
			// 	}
			// }
			
			// soundIntroDataBase[message.author.username] = {
			// 	messaged: message.content.slice(12),
			// 	bye: message.author.toString()
			// }
			// console.log('Just above the write method')
			// fs.writeFileSync(`./soundIntro.json`, JSON.stringify(soundIntroDataBase), err =>{
			// 	if(err){
			// 		message.channel.send("Error")
			// 	}
			// })




					// fields.commands.forEach(cmds => {
					// 	if(message.content.splice(12) == cmds.name){
					// 		channelMembers.set(message.author.username,cmds.name)
					// 		soundIntroDataBase [message.author.username] = {
					// 			message: cmds.name
					// 		}
					// 		fs.writeFileSync("./", writer.stringify(cmds.name, null, 4), error =>{
					// 			if(error)throw error
					// 			message.channel.send("Error")
					// 		})
					// 	}else{
					// 		message.channel.send('Sorry I could not find that command, please restart the setup process again.')
					// 	}
					// })
				


				// var data = JSON.stringify(message.content)
				// fs.writeFile('./SoundIntro.JSON', data, finished);
				// function finished(err){
				// 	console.log(done)
				// }

			
				// const filter = message => message.content.includes('!setupintro');
				// const collector = message.channel.createMessageCollector(filter, {Max: 2, time: 12000 });
				// console.log('We are in')
				// collector.on('collect', message => {
				// 	console.log(`Collected ${message.content}`);
				// 	if(collector.size = 2){
				// 		collector.stop
				// 	}
				// });

				// collector.on('end', collected => {
				// 	console.log(`Collected ${collected.size} items`);
				// 	collector.stop
					
				// });
				
		}

				
			
			// console.log('m.author.dmChannel ' + m.author.dmChannel)
			// console.log('m.channel ' + m.channel)
			// message.channel.send('Please select one of the custom intro from below - to select type !setupintro (X) - X being a number without the brackets.') 
	}
	