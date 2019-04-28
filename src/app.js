import headsOrTails from './heads-or-tails.js';

//selecting the elements I want to use (posting the cast list)
const flipButton = document.getElementById('flip-button');
const puppyImage = document.getElementById('puppy-image');
const message = document.getElementById('message');
const headsChoice = document.getElementById('heads-choice');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const betBox = document.getElementById('bet-box');
const walletMessage = document.getElementById('wallet');

//initializing things
let wins = 0;
let losses = 0;
let walletAmount = 150;


//wiring up listening event
flipButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = headsOrTails(randomNumber);

    //change image display depending on flip
    const imageSource = './assets/' + flip + '.jpg';
    puppyImage.src = imageSource;

    //initializing empty guess, making it Heads or Tails
    //linking the radio button guess to our flip button
    let guess = '';
    if(headsChoice.checked) {
        guess = 'Heads';
    } else {
        guess = 'Tails';
    }

    //display message and change based on user selection
    const guessedCorrect = flip === guess;
    if(guessedCorrect) {
        message.textContent = 'You won!';
    } else {
        message.textContent = 'You lose!';
    }

    //increment wins or losses and add/subtract bet amount from wallet
    if(guessedCorrect) {
        wins++;
        winsDisplay.textContent = 'Wins: ' + wins;
    } else {
        losses++;
        lossesDisplay.textContent = 'Losses: ' + losses;
    }

    //creating money betting feature
    let betAmount = betBox.value;
    if(guessedCorrect) {
        const addMoney = addingBetToWallet(betAmount, walletAmount);
        walletMessage.textContent = 'You have $' + addMoney + ' in your wallet';
    } else {
        const subtractMoney = subtractBetFromWallet(betAmount, walletAmount);
        walletMessage.textContent = 'You have $' + subtractMoney + ' in your wallet';
    }

});

function addingBetToWallet(betAmount, walletAmount) {
    return parseFloat(betAmount) + parseFloat(walletAmount);
}

function subtractBetFromWallet(betAmount, walletAmount) {
    return parseFloat(walletAmount) - parseFloat(betAmount);
}
