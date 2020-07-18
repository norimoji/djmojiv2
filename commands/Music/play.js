const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core-discord');
const ffmpeg = require('ffmpeg-static');
const discord = require('discord.js');
const util = require('util');
const { getVideoID } = require('ytdl-core-discord');
const { inflateRawSync } = require('zlib');

const queue = new Map();
const musicQueue = new Array();
var queueConstruct = {
	textChannel: null,
	voiceChannel: null,
	voiceConnection: null,
	tracksQueue:[]
}


module.exports = class play extends Command {
	constructor(client) {
		super(client, {
			name: 'play',
			group: 'music command',
			memberName: 'play',
			description: 'Play a music from local or URL',
		});
		
	}

	async run(message, source) {
		const serverQueue = queue.get(message.guild.id)
		const guildVoiceChannel = message.member.voice.channel;
		
		if(ytdl.validateURL(source)){
			if(ytdl.getVideoID(source)){
				const trackInfo = await ytdl.getInfo(source.toString());
				const tracks = {
					title:trackInfo.title,
					url:trackInfo.video_url
				}
				if(!queue.has(message.guild.id)){
					queueConstruct = {
					  textChannel:message.textChannel,
					  voiceChannel:guildVoiceChannel,
					  voiceConnection: null,
					  tracksQueue:[],
					};
					queue.set(message.guild.id,queueConstruct);
				}
				if(!guildVoiceChannel && this.client.voice.connections.size === 0 ){ 
					message.reply("Please join a voice channel to play music.");
				}else{
					 if(queue.has(message.guild.id) && queueConstruct.tracksQueue.length === 0){
						queueConstruct.tracksQueue.push(tracks)
						if(queue.get(message.guild.id).voiceConnection != null){
							this.playSong(message,queueConstruct.voiceConnection,queue.get(message.guild.id).tracksQueue[0])	
						}else{
							const connection = await guildVoiceChannel.join();
							queueConstruct.voiceConnection = connection;
							this.playSong(message,connection,queue.get(message.guild.id).tracksQueue[0])	
							// const dispatcher = connection.play(await ytdl(musicQueue[0], {filter: format => ['251'],
							// highWaterMark: 1 << 25, quality: 'highestaudio'}), {type: 'opus'})
							// dispatcher.setVolumeLogarithmic(3 / 5);
						}
					}else{
						queueConstruct.tracksQueue.push(tracks)
					}
				}
			}else{
				message.reply('Invaild')
			}
		}else{
				message.reply("Invaild YouTube URL");
		}
	}
	

	async playSong(message,connection, queueMusic) {
		const dispatcher = connection.play(await ytdl(queueMusic.url, {filter: format => ['251'], highWaterMark: 12 << 25, quality: 'highestaudio'}), {type: 'opus'})
		this.client.user.setActivity(queueMusic.title);
		dispatcher.setVolumeLogarithmic(3 / 5);

		dispatcher.on('finish', () => {
			queue.get(message.guild.id).tracksQueue.shift()
			if(queue.get(message.guild.id).tracksQueue.length === 0){
				this.client.user.setActivity('');
				message.reply('The current music queue is empty, queue songs to continue playing.')
			}else{
				setTimeout(() =>{
					this.playSong(message,connection,queue.get(message.guild.id).tracksQueue[0]);
				},3000)
			}
		})
	}

	skipTrack(message){
		queue.get(message.guild.id).tracksQueue.shift()
		if(queue.get(message.guild.id).tracksQueue.length === 0){
			message.reply('The current music queue is empty, queue songs to continue playing.')
		}else{
			this.playSong(message,queue.get(message.guild.id).voiceConnection,queue.get(message.guild.id).tracksQueue[0]);
		}
	}

}


