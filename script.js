const audioPlayer = document.getElementById('audio-player');
const fileInput = document.getElementById('file-input');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');


fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioPlayer.src = fileURL;
        audioPlayer.play();
    }
});


playButton.addEventListener('click', () => {
    audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});








