
  var Letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];  // list of all letter options
  var youWin = 0; // Total Wins
  var youLose = 0; // Total Losses
  var guessesLeft = 10; // Remaining Guesses
  var guessedLetters = []; //Array to capture user letter input

  document.onkeyup = function(event) {
    var yourGuess = event.key; //variable to calculate user's guess
    guessedLetters.push(yourGuess); //This is suppose to capture letters .push = adds one or more elements to the end of an array and returns the new length of the array.
    var psychicGuess = Letters[Math.floor(Math.random() * Letters.length)]; //randomly generates computers letter choice. 

    //If your guess matches the psychic's guess,
    //a point is added to the "Wins" tally and the guesses tally restarts.
    if (yourGuess === psychicGuess) {
      youWin++;
      guessesLeft = 10;
      guessedLetters = [];
    }
    //If your guess does not not match the psychic's guess, your number of guesses remaining are reduced by one.
    else {
      guessesLeft--;
    }

    //If the guesses remaining equals 0, you lose, an increment is added to the "Losses" tally and the points restart.
    if (guessesLeft === 0){
      youLose++;
      guessesLeft = 10;
      guessedLetters = [];
    }


    var html = "<p>Guess what letter I'm thinking of:</p>" + "<p>Wins: " + youWin + "</p>" + "<p>Loses: "+ youLose + "<p>Guesses Remaining: " + guessesLeft + "<p>Guessed Letter: " +  guessedLetters.join(', '); //Show guessed letters here
    document.querySelector("#psychicAct").innerHTML = html;
    
   

  }