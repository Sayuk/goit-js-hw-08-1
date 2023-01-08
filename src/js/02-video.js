import Player from '@vimeo/player';

var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay({ seconds }) {
//   localStorage.setItem('videoplayer-current-time', seconds);
// }

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));


player.on('timeupdate', function (currentTime) {
  const seconds = currentTime.seconds;
        localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    });
player.setCurrentTime(1000).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.player) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
   