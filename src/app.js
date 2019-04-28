import headsOrTails from './heads-or-tails.js';

//selecting the elements I want to use (posting the cast list)
const flipButton = document.getElementById('flip-button');
const puppyImage = document.getElementById('puppy-image');

//initializing things

//wiring up listening event
flipButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = headsOrTails(randomNumber);

    //change image display depending on flip
    const imageSource = './assets/' + flip + '.jpg';
    puppyImage.src = imageSource;

});