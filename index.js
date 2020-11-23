const playButton = document.querySelector('#playpause');
const forwardButton = document.querySelector('#playforward');
const backButton = document.querySelector('#playback')
const audioElem = document.querySelector('#audio');
const progressElem = document.querySelector('.progress')
const volumeElem = document.querySelector('#volume')
const progressBarElem = document.querySelector('.progressbar')
const timerUp = document.querySelector('#timerup')
const timerDown = document.querySelector('#timerdown')
const volumeNumber = document.querySelector('#volumetab')

let musicPlaying = false;
//let counter; //needed whenever arrow function us not used

playButton.addEventListener('click', function(){
    if (musicPlaying === false) {
        playButton.setAttribute('src', 'images/pause.svg')
        musicPlaying = true;
        playMusic();
    } else {
        playButton.setAttribute('src', 'images/play.svg')
        musicPlaying = false;
        pauseMusic();
    }
});

forwardButton.addEventListener('click', () => audioElem.currentTime += 10);
/*                                   //arrow function
 function forwardMusic(){
    console.log('forward');
    audioElem.currentTime += 10;
}
*/                                  //arrow function

backButton.addEventListener('click', () => audioElem.currentTime -= 10);


function playMusic () {
    console.log('playing music');
    audioElem.play();
    //counter = setInterval(progressCounter, 100);  //used for non arrow function
}

function pauseMusic() {
    console.log('pausing music');
    audioElem.pause()
    //clearInterval(counter); //used for non arrow function
}

audioElem.ontimeupdate = function() { //progression bar
    let durationProgress = (audioElem.currentTime / audioElem.duration) * 200;
    progressElem.style.width = durationProgress + 'px';
    displayTime();
}

audioElem.addEventListener('ended', function(){ //resets the page when the song ends
    progressElem.style.width = '0px';
    playButton.setAttribute('src', 'images/play.svg');
    musicPlaying = false;
})

volumeElem.addEventListener('mousemove', function(){ //volume button for the mouse                                                              button movement
    audioElem.volume = volumeElem.value/100;
    volumeNumber.innerHTML = 'Volume: ' + volumeElem.value;

})

progressBarElem.addEventListener('click', function(event){
    audioElem.currentTime = ((event.offsetX / 200) * audioElem.duration)
})

function displayTime () {
    let currentTime = audioElem.currentTime;
    let timerUpMinutes = Math.floor(currentTime / 60)
    let timerUpSeconds = Math.floor(currentTime - timerUpMinutes * 60);
    
    let timeLeft = audioElem.duration - currentTime;
    let timerDownMinutes = Math.floor(timeLeft / 60);
    let timerDownSeconds = Math.floor(timeLeft - timerDownMinutes * 60);

    if (timerUpSeconds < 10) {  
        timerUp.innerHTML = timerUpMinutes + ':0' + timerUpSeconds
    } else {
        timerUp.innerHTML = timerUpMinutes + ':' + timerUpSeconds
    }

    if (timerDownSeconds < 10) {
        timerDown.innerHTML = '-' + timerDownMinutes + ':0' + timerDownSeconds
    } else {
        timerDown.innerHTML = '-' + timerDownMinutes + ':' + timerDownSeconds
    }
}

/*function displayTime(){
    let time = audioElem.duration;
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    console.log('Minutes: ', minutes);
    console.log('Seconds: ', seconds);
}*/





//function instead of arrow functions=====
/*function progressCounter(){
    let durationProgress = parseInt((audioElem.currentTime / audioElem.duration) * 200);
    progressElem.style.width = durationProgress + 'px';
    
}*/



