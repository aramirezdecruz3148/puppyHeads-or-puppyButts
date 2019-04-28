import headsOrTails from './heads-or-tails.js';

//selecting the elements I want to use (posting the cast list)
const flipButton = document.getElementById('flip-button');
const puppyImage = document.getElementById('puppy-image');
const message = document.getElementById('message');
const headsChoice = document.getElementById('heads-choice');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');

//initializing things
let wins = 0;
let losses = 0;

//wiring up listening event
flipButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = headsOrTails(randomNumber);

    //change image display depending on flip
    const imageSource = './assets/' + flip + '.jpg';
    puppyImage.src = imageSource;

});