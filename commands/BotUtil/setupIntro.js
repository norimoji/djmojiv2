const { Command } = require('discord.js-commando');
const soundboard = require('../soundboard/soundboardMaster');
const discord = require('discord.js')
const helpsoundboard = require('./helpsound')
const schema = require('./schemas/schema');
const mongo = require('../../mongo');

const channels = new Map()
const listOfChannels = []
const setupInProgress = new Map()
const soundboardCollection = []

module.exports = class setupIntro extends Command {
	constructor(client) {
		super(client, {
			name: 'setupintro',
			group: 'bot utility',
			memberName: 'setupintro',
			description: 'Setup up your own custom intro'
		});
		}  
		
		async run(message){
			if(message.channel.type != 'dm'){
				if(!setupInProgress.has(message.author.id))
				{
					message.author.send('Please select one of the custom intro from below with X being a number, to select intro type !setupintro X')  
					message.author.send('To cancel this command enter !setupintro 00.')
					var listSB = new helpsoundboard(this.client)
					listSB.listSoundboardCommands(message)
					setupInProgress.set(message.author.id, message.guild.id)
				}else{
					message.author.send('Please finish off your previous setup by typing !setupintro (X) - X being a number without the brackets, before setting up a new intro in another server.')
					message.author.send('To cancel setup type !setupintro 00.')
				}
			}else if(message.channel.type == 'dm'){				
				var tempSoundSize = soundboardCollection.length - 1
				if(message.content.substring(12) > tempSoundSize){
					message.author.send('Please stay within range of 0 - ' + tempSoundSize)
				}else if(setupInProgress.has(message.author.id) && message.content === '!setupintro 00'){
					setupInProgress.delete(message.author.id)
					message.author.send('!setupintro command has been cancelled, to reuse !setupintro, navigate to a server and re-enter !setupintro to begin the command.')
				}else if(message.content === '!setupintro'){
					message.author.send('To select type !setupintro (X) - X being a number without the brackets.')
				}else if(setupInProgress.has(message.author.id)){
					await mongo().then(async mongoose =>{
						try{
						await schema.findOneAndUpdate({
							_channelId: setupInProgress.get(message.author.id),
							_userId: message.author.id
						}, {
							_channelId: setupInProgress.get(message.author.id),
							_userId: message.author.id,
							 option: this.getSoundViaNumber(message.content.substring(12))
						}, {
							upsert: true
						})
						} finally {
							mongoose.connection.close()
							setupInProgress.delete(message.author.id)
							message.author.send('Your new intro ' + '**' + this.getSoundViaNumber(message.content.substring(12)) + '**' + ' is now ready.')
							this.loadsDB()
						}
					})
				}else{
					message.author.send('To use this command please go to a server and enter !setupintro.')	
				}
			}
		}

		async loadsDB(){
			if(soundboardCollection.length === 0){
				this.convertSoundboardToArray()
			}
			await mongo().then(async mongoose =>{
				try{
					const results = await schema.find() //list all data in the database no conditions
					for(const result of results){
						let tempValue = [result._channelId,result._userId, result.option]
						listOfChannels.push(tempValue)
					}
				}finally{
					mongoose.connection.close
				}	
			})
		}

		getUserIntro(guildID ,userID){
			let tempValue = ""
			listOfChannels.forEach(cursor => {
				if(guildID === cursor[0]){
					if(userID === cursor[1]){
						tempValue = this.getSound(cursor[2]) //cursor[2] is a number entry _options in database.
						return 
					}
				}
			})
			return tempValue
		}

		convertSoundboardToArray(){
			this.client.registry.findGroups('soundboard collection').forEach((fields) => {
				fields.commands.forEach(cmds => {
					soundboardCollection.push(`${cmds.name}`)
				})
			})
			console.log('Soundboard loaded')
		}

		getSound(message){
			let tempValue = ""
			soundboardCollection.forEach(sound => {
				if(sound === message){
					tempValue = sound
					return
				}
			})
			return tempValue
		}

		async removeIntro(message){
			await mongo().then(async mongoose =>{
				try{
				await schema.deleteOne({
					_channelId: setupInProgress.get(message),
					_userId: message
				})
				} finally {
					mongoose.connection.close()
					this.loadsDB()
				}
			})
		}

		async findAndUpdateToDB(message){
			await mongo().then(async mongoose =>{
				try{
				await schema.findOneAndUpdate({
					_channelId: setupInProgress.get(message.author.id)},
				{
					_channelId: setupInProgress.get(message.author.id),
					_userId: message.author.id,
					 option: this.getSoundViaNumber(message.content.substring(12))
				}, {
					upsert: true
				})
				} finally {
					mongoose.connection.close()
					setupInProgress.delete(message.author.id)
					message.author.send('Your new intro ' + '**' + this.getSoundViaNumber(message.content.substring(12)) + '**' + ' is now ready.')
					this.loadsDB()
				}
			})
		}

		getSoundViaNumber(message){
			let tempValue = ""
				for(var i = 0; i < soundboardCollection.length; i++){
					if(i === message.content){
						break
					}
					tempValue = soundboardCollection[message]
					break
				}
			return tempValue
		}
}
	
