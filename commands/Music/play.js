const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core-discord');
const ffmpeg = require('ffmpeg-static');
const discord = require('discord.js');
const util = require('util');
const { getVideoID } = require('ytdl-core-discord');
const { inflateRawSync } = require('zlib');
const { time } = require('console');

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
			description: 'Play a music from YouTube.',
		});
		
	}

	async run(message, source) {
		const guildVoiceChannel = message.member.voice.channel;
		
		if(ytdl.validateURL(source)){
			if(ytdl.getVideoID(source)){
				const trackInfo = await ytdl.getInfo(source.toString());
				const tracks = {
					title:trackInfo.videoDetails.title,
					url:trackInfo.videoDetails.video_url
				}
				if(!queue.has(message.guild.id)){
					queueConstruct = {
					  textChannel:message.textChannel,
					  voiceChannel:guildVoiceChannel,
					  voiceConnection: null,
					  tracksQueue:[],
					  paused: false
					};
					queue.set(message.guild.id,queueConstruct);
				}
				if(!guildVoiceChannel && this.client.voice.connections.size === 0 ){ 
					message.reply("Please join a voice channel to play music.");
				}else{
					 if(queue.has(message.guild.id) && queueConstruct.tracksQueue.length === 0){
						queueConstruct.tracksQueue.push(tracks)
						if(queue.get(message.guild.id).voiceConnection != null){
							if(queue.get(message.guild.id).voiceChannel != null){
								queue.get(message.guild.id).voiceConnection = await queue.get(message.guild.id).voiceChannel.join(); // a better way would be to find the ClientVoiceManager-Connection array and see if the voice channel is there.
								this.playSong(message,queue.get(message.guild.id).voiceConnection,queue.get(message.guild.id).tracksQueue[0])
							}	
						}else{
							const connection = await guildVoiceChannel.join();
							queueConstruct.voiceConnection = connection;
							this.playSong(message,connection,queue.get(message.guild.id).tracksQueue[0])	
							console.log(queue.get(message.guild.id).tracksQueue[0])
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
	

	async playSong(message, connection, queueMusic) {
		const dispatcher = connection.play(await ytdl(queueMusic.url, {filter: format => ['251'], highWaterMark: 12 << 25, quality: 'highestaudio'}), {type: 'opus'})
		this.client.user.setActivity(queueMusic.title);
		dispatcher.setVolumeLogarithmic(3 / 5);
		// const Clock = dispatcher.streamTime()
		// console.log("Time" + Clock)

		dispatcher.on('finish', () => {
			queue.get(message.guild.id).tracksQueue.shift()
			if(queue.get(message.guild.id).tracksQueue.length === 0){
				this.client.user.setActivity('with Development');
				message.reply('The current music queue is empty, queue songs to continue playing.')
			}else{
				setTimeout(() =>{
					this.playSong(message,connection,queue.get(message.guild.id).tracksQueue[0]);
				},3000)
			}
		})
	}

	skipTrack(message){
		if(queue.has(message.guild.id)){
			queue.get(message.guild.id).tracksQueue.shift()
			if(queue.get(message.guild.id).tracksQueue.length === 0){
				message.reply('The current music queue is empty, queue songs to continue playing.')
			}else{
				this.playSong(message,queue.get(message.guild.id).voiceConnection,queue.get(message.guild.id).tracksQueue[0]);
			}
		}else{
			message.reply("There is no tracks left to skips.")
		}
	}

	pauseTrack(message){
		if(queue.has(message.guild.id)){
			if(queue.get(message.guild.id).paused){
				queue.get(message.guild.id).paused = false
				queue.get(message.guild.id).voiceConnection.dispatcher.resume()
			}else{
				queue.get(message.guild.id).paused = true
				queue.get(message.guild.id).voiceConnection.dispatcher.pause(true)
			}
		}else{
			message.reply("There is no bot to pause in this channel.")
		}
	}

	intersect(message){
		var currentTimeStamp = 0;
		if(queue.get(message.guild.id).voiceConnection != null){
			if(currentTimeStamp == 0){
				console.log('intersecting')
				currentTimeStamp = queue.get(message.guild.id).voiceConnection
				console.log(queue.get(message.guild.id).voiceConnection.streamTime())
				console.log(currentTimeStamp.streamTime())
			}else{
				var playingTrack = queue.get(message.guild.id).tracksQueue[0]+ "t=" + this.currentTimeStamp;
				console.log(playingTrack)
				this.playSong(message,queue.get(message.guild.id).voiceConnection,playingTrack);
				currentTimeStamp = 0
			}
		}
	}

	stopPlayer(message){
		if(queue.has(message.guild.id)){
			this.client.user.setActivity('with Development');
			queue.get(message.guild.id).voiceConnection.disconnect();
		}else{
			message.reply("This channel has music player currently playing.")
		}
		queue.delete(message.guild.id)
	}

	clearPlayerOnLeave(message){
	  queue.delete(message.guild.id)
	}
}


