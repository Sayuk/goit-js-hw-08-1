import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds))
}
setCurrentTime()
function setCurrentTime(){
    if(!localStorage.getItem('videoplayer-current-time')){
        return
    }
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
}