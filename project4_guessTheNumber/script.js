// 1–100 er modhhe random number generate koro
let randomNumber = parseInt(Math.random() * 100 + 1);
// Game state variables
let prevGuess = [], numGuess = 1, playGame = true;
// querySelector shortcut helper
const $ = id => document.querySelector(id);
// DOM elements select koro
const submit = $('#subt'); //submit button
const userInput = $('#guessField'); // User input field
const guessSlot = $('.guesses');    // Guess history dekhanor জায়গা
const remaining = $('.lastResult'); // Remaining attempts dekhanor জায়গা
const lowOrHi = $('.lowOrHi');      // "Too high / Too low" message er জায়গা
const startOver = $('.resultParas');// "New Game" button append করার জায়গা
// Submit button e click korle ei function chalbe
submit.addEventListener('click', e => {
    e.preventDefault(); // Page reload bondho koro

    if (!playGame) return; // Game shesh hole ar kaj korbe na

    // Input value ke integer e convert koro
    const guess = parseInt(userInput.value);

    // Jodi invalid number hole alert dao and exit koro
    if (isNaN(guess) || guess < 1 || guess > 100)
        return alert('Please enter a valid number between 1 and 100');

    prevGuess.push(guess);              // Guess ta history te rakho
    userInput.value = '';               // Input field clear koro
    guessSlot.innerHTML += `${guess}, `; // Guess ta screen e show koro
    remaining.innerHTML = 11 - ++numGuess; // Remaining attempts update koro (numGuess আগে বাড়াও)

    // 11 attempt shesh hole game over
    if (numGuess > 11) {
        showMsg(`Game Over! Number was ${randomNumber}`); // Sothik number janao
        return endGame(); // Game bondho koro
    }

    // Jodi guess sothik hole win message dao
    if (guess === randomNumber) showMsg('You guessed it right! 🎉'), endGame();
    // Jodi guess chhoto hole "Too Low", boro hole "Too High"
    else showMsg(guess < randomNumber ? 'Too Low 📉' : 'Too High 📈');
});

// Message show korar helper function
const showMsg = msg => lowOrHi.innerHTML = `<h2>${msg}</h2>`;

// Game shesh korar function
function endGame() {
    userInput.disabled = true; // Input disable koro
    playGame = false;           // Game flag off koro

    // Notun "Start New Game" button banao
    const btn = document.createElement('button');
    btn.id = 'newGame';
    btn.textContent = 'Start New Game';
    startOver.appendChild(btn); // Button ta page e add koro

    // New Game button e click hole reset hobey
    btn.addEventListener('click', () => {
        randomNumber = parseInt(Math.random() * 100 + 1); // Notun random number nao
        prevGuess = []; numGuess = 1; playGame = true;     // State reset koro
        guessSlot.innerHTML = '';   // Guess history clear koro
        remaining.innerHTML = 10;   // Remaining attempts reset koro
        userInput.disabled = false; // Input abar enable koro
        showMsg('');                // Message clear koro
        startOver.removeChild(btn); // Button remove koro
    });
}