const ytdl = require('ytdl-core');
const Discord = require('discord.js');
const ffmpeg = require('ffmpeg');
const bot = new Discord.Client({disableEveryone: true});
const streamOptions = {seek: 0, volume: 1};

const queue = new Map(); // -- playlist queue.

module.exports = {
    name: 'play',
    async execute(message, args) {
      const voiceChannel = message.member.voiceChannel;
      const serverQueue = queue.get(message.guild.id);

      if (!voiceChannel) {
        return message.reply('Please be in a voice channel first!');
      }
      const trackInfo = await ytdl.getInfo(args.toString());
      const tracks ={
        title:trackInfo.title,
        url: trackInfo.video_url,
      }

      if(!serverQueue){
        const queueConstruct = {
          textChannel:message.textChannel,
          voiceChannel:message.member.voiceChannel,
          voiceConnection: null,
          tracksQueue:[],
          volume: 5,
          playing:true
        };
        queue.set(message.guild.id,queueConstruct);
        queueConstruct.tracksQueue.push(tracks);

        try{
          var voiceConnection = await voiceChannel.join();
          queueConstruct.voiceConnection = voiceConnection;
          playSong(message.guild.id,queueConstruct.tracksQueue[0]);
        }catch (error){
          console.error('I could not join voice channel beacause: ', error);
          queue.delete(message.guild.id)
          return message.reply ('I could not join voice channel because something happened - check logs');
          }
        } else {
            serverQueue.tracksQueue.push(tracks);
            return message.reply (`**${tracks.title}** has been added to the queue !`);
        }
        return undefined;

        function playSong (guild, tracksQueue) {
          const serverQueue = queue.get(guild);
          if(!tracksQueue){
            // serverQueue.voiceChannel.leave();
            queue.delete(guild);
            return;
          }
          
          const dispatcher = serverQueue.voiceConnection.playStream(ytdl(tracksQueue.url))
          .on('end', () => {
            console.log('song ended!');
            serverQueue.tracksQueue.shift();
            playSong(guild, serverQueue.tracksQueue[0]);
          });
          dispatcher.setVolumeLogarithmic(1 / 5);
        }
  },

  
}
