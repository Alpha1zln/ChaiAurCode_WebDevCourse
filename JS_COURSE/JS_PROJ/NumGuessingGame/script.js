
let attempts = 0;
let random_num = null;
let gameActive = false; // To control game flow

const genBtn = document.querySelector("#gen_num");
const resultBtn = document.querySelector("#result_btn");
const guessInput = document.querySelector("#guess_num");
const countGuessesBtn = document.querySelector("#count_guesses");
// const message = document.querySelector("#message");


// gen num
// let gen_num = document.querySelector("#gen_num");
genBtn.addEventListener("click", () => {
    random_num = Math.floor(Math.random()*100) + 1;
    attempts = 0;
    
    countGuessesBtn.innerText = (attempts); // recent guesses 
    guessInput.value = ""; // Clear input field
    gameActive = true; // Set game to active
    guessInput.disabled = false; // enable input

    genBtn.innerText = "New number generated. Guess Now";
    message.innerText = "✅ New number generated, start guessing!";
    resultBtn.innerText = "Result"; // reset button text
    
});

// gen_num.addEventListener("click", function() {
//     gen_num = Math.floor(Math.random()*100) + 1;
//     gen_num.innerHTML = "New number generated, Guess Now";

// result_btn = document.querySelector("#result_btn");


// let flag = false;
// while(true) {
    // let guess_num = document.querySelector("#guess_num");
guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let guess = Number(guessInput.value);
    attempts++;
    countGuessesBtn.innerText = (attempts);


        // Basic input validation
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageDisplay.innerText = "Please enter a valid number between 1 and 100.";
        guessInput.value = "";
        return;
    }


    if(guess === random_num) {
        guessInput.disabled = true; // Disable input
        resultBtn.innerText= `You Win, Guessed in ${attempts} tries`;
        countGuessesBtn.innerText = 0; attempts = 0; // Reset attempts
        genBtn.innerText = "Play Again? Click to generate a new number";
    }
    else if(guess < random_num) {
    resultBtn.innerText = "Your guess is low. Try again!";
    // guessInput.value = 0;
    }
    else {
        resultBtn.innerText = "Your guess is high. Try again!";    
        // guessInput.value = 0;
    }

        // Clear input after check
        guessInput.value = "";
 }

});


guessInput.disabled = true; // Disable input until game starts


