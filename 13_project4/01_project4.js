/* math.rnadom() gives a random number between 0-1  ,,we multiply it with 100 to make it between 0-100
 ,the result is in decimal ,then ,when use math.floor() ,to remove the numbers after decimal ,then we add
 1 to the result to make the result between 1-100 */

 const secretNumber = Math.floor(Math.random() * 100) +1;

//store the number of attempts ,the user has tried to guessed the correct secret number
let attempts = 0; //okay this is not taken fron html ,,it is variable made here


//getting elements from html through DOM manipulation
//grabs the input element with id userGuess ,the box where the user puts the guess number
const userGuessInput = document.getElementById("userGuess");

//grabbing the button where the user clicks to check if the guessed number is correct or not
const checkButton = document.getElementById("checkButton");

/*grabbing the para element(message text) where the website will display the result if the guessed nnumber is correct
or not */
const resultText = document.getElementById("result"); //its content will be changes based the guessed number

const attemptsText = document.getElementById("attempts"); //will be updated after each guess

//react to button click -> event used here
checkButton.addEventListener("click",() => {
    const userGuess = Number(userGuessInput.value); /* here when button is clicked ,the value put in 
    input box will be checked , in the above line when the user input the number ,through number()
    the input is converted to number from string like "23"

    /*making sure the guessed number is between 1-100 ,not smthng other than that ,like less than 1,more than 100,and stirng */
    if(!userGuess || userGuess >100 || userGuess<1){
        resultText.textContent = "please input a valid number between range 1-100";
        return; //stops the whole function from running further
    }
    attempts++ ;

    if(userGuess===secretNumber){
        resultText.textContent = `Great! you guessed the correct number, the secret number is:${secretNumber}`;
    
    resultText.style.color = "yellow"; //change the text to white when numbe ris guessed correctly

    checkButton.disabled = true; //prevents the button from further guesses
    }else if(userGuess < secretNumber){
        resultText.textContent = "the guessed number is lower than secret Number,Try again";
        resultText.style.color = "orange";
    }else{
        resultText.textContent = "the guessed number is higher than secret Number,Try again";
        resultText.style.color = "orange";
    attemptsText.textContent = `Attempts : ${attempts}`;
    }
})






