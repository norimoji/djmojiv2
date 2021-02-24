const { Command } = require('discord.js-commando');
const schema = require('./schemas/schema');
const mongo = require('../../mongo');
const setupIntro = require('./setupIntro')

module.exports = class removeIntro extends Command {
	constructor(client) {
		super(client, {
			name: 'removeintro',
			group: 'bot utility',
			memberName: 'removeintro',
			description: 'remove your own custom intro'
		});
		}  
		
		async run(message){
			var intro = new setupIntro(this.client)
			await mongo().then(async mongoose =>{
				console.log(intro.getSetupInProgressObject(message.author.id))
				try{
				await schema.findOneAndDelete({
					_channelId: message.guild.id
				, function (error, docs){
					if (error){ 
						console.log(error) 
					} 
					else{ 
						console.log("Deleted : ", docs); 
					} 
				} 
			})
				} finally {
					mongoose.connection.close()
					intro.loadsDB()
					console.log('removed')
				}
			})
		
	}
}
	