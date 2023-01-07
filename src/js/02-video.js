import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);

player.on('timeupdate', function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify.seconds)
})
