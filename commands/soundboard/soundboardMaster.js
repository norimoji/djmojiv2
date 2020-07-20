const { Command } = require('discord.js-commando');
const ytdl = require('ytdl-core-discord');
const ffmpeg = require('ffmpeg-static');
const discord = require('discord.js');
const util = require('util');
const { getVideoID } = require('ytdl-core-discord');
const { inflateRawSync } = require('zlib');
const play = require('../Music/play');
const fs = require('fs');
const path = require('path')

const queue = new Map();
var queueConstruct = {
	textChannel: null,
	voiceChannel: null,
	voiceConnection: null,
	tracksQueue:[]
}
const musicPlayer = null;

module.exports = class soundBoard extends Command {
	constructor(client) {
		super(client, {
			name: 'soundboard',
			group: 'soundboard collection',
			memberName: 'soundboard',
			description: 'Factory class',
		});
        
    }

    async run(message, source) {
        this.musicPlayer = new play(this.client)
		const guildVoiceChannel = message.member.voice.channel;
		
        if(!queue.has(message.guild.id)){
            queueConstruct = {
                textChannel:message.textChannel,
                voiceChannel:guildVoiceChannel,
                voiceConnection: null,
            };
            queue.set(message.guild.id,queueConstruct);
        }
        if(!guildVoiceChannel){ 
            message.reply("Please join a voice channel to play music.");
        }else{
            //this.musicPlayer.intersect(message)
            if(queue.get(message.guild.id).voiceConnection != null){
                if(queue.get(message.guild.id).voiceChannel != null){
                    queue.get(message.guild.id).voiceConnection = await queue.get(message.guild.id).voiceChannel.join(); // a better way would be to find the ClientVoiceManager-Connection array and see if the voice channel is there.
                    this.playSong(message,queue.get(message.guild.id).voiceConnection,source)
                }
            }else{
                const connection = await guildVoiceChannel.join();
                queueConstruct.voiceConnection = connection;
                this.playSong(message,connection,source)	
                // const dispatcher = connection.play(await ytdl(musicQueue[0], {filter: format => ['251'],
                // highWaterMark: 1 << 25, quality: 'highestaudio'}), {type: 'opus'})
                // dispatcher.setVolumeLogarithmic(3 / 5);
            }
        }
    }
    
    async playSong(message,connection, source) {
        const dispatcher = connection.play(path.join(__dirname, source), { highWaterMark: 50 })
		//const dispatcher = connection.play(fs.createReadStream(path.join(__dirname, source)), { type: 'ogg/opus' })
		dispatcher.setVolumeLogarithmic(3 / 5);

		dispatcher.on('finish', () => {
            //this.musicPlayer.intersect(message)
            
		})
	}
};