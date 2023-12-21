const audioMerryChristmas = new Audio('../assets/audio/merry-christmas.mp3');
const audioConfetti = new Audio('../assets/audio/confetti.wav');

audioMerryChristmas.volume = 0.4;
audioConfetti.volume = 0.2;

setTimeout(function addItem() {

    audioMerryChristmas.play();
    audioConfetti.play();

    
    handleConfettiEffect() 
}, 1000);