'use strict';

// Here are two different ways : 1: Regular way &  2 : Advanced way to keep DRY method.


//======================       Regular way      ==================================//
/*
// Set the variables 

let secretNumber = Math.trunc(Math.random()*20 + 1); // for random numbers.

let score = 20; // score limit

let highScore = 0;


// make a function for Check button with event listener and set all the conditions one by one

document.querySelector('.check').addEventListener('click',function(){

    let guess = Number(document.querySelector('.guess').value);

     console.log(guess);

 // 1st : When there is no input in guess

    if(!guess){

        document.querySelector('.message').textContent ="❌ No Number!!"
    
 // 2nd : When player wins

    } else if(guess === secretNumber){

        document.querySelector('.message').textContent ="🎉 Correct Number! 🎉" ;

        // to show the number
        document.querySelector('.number').textContent = secretNumber; 


        // Change the body color

        document.querySelector('body').style.backgroundColor = "#60b347";

        // Change the number box size

        document.querySelector('.number').style.width = "30rem";


        //  show the highScore

        if(score > highScore){

            highScore = score;

            document.querySelector('.highScore').textContent = highScore;
        }
    
 // 3rd : When guess is wrong 

    } else if(guess !== secretNumber){

        // make condition
        if(score > 1){
        
            // ternary operator
            document.querySelector('.message').textContent = (guess > secretNumber ? "❗Too High!" : "❗Too Low!");
            
            //decrease the score
            score--; 

            // show the score
            document.querySelector('.score').textContent = score;

            // to stop the game
        } else{
            document.querySelector('.message').textContent ="😞😞 You loose the Game!"

             // Change the body color

             document.querySelector('body').style.backgroundColor = "red";

             // make the score 0
             document.querySelector('.score').textContent = 0;

        }
    } 
});


// Set a function for Again button so that when the player click again then the game will start again

document.querySelector('.again').addEventListener('click',function(){

    score = 20;
    secretNumber = Math.trunc(Math.random()* 20 + 1);

    // set old message
    document.querySelector('.message').textContent = 'Start guessing...';

    // set score
    document.querySelector('.score').textContent = score;

    // set number box with ? sign again
    document.querySelector('.number').textContent = "?";

     // set the old number box size
     document.querySelector('.number').style.width = "15rem";


    // set the guess box as empty again
    document.querySelector('.guess').value = "";

    // set the old background color 
    document.querySelector('body').style.backgroundColor = "#222";
   
});
*/
                   //================ End of 1st way ==============//

/*********************     Advance Way    ***************************** */

// Set the variables 

let secretNumber = Math.trunc(Math.random()*20 + 1); // for random numbers.

let score = 20; // score limit

let highScore = 0;


// make a function expression for all messages 

let displayMessage = function(message){
    document.querySelector('.message').textContent= message;
};

// make a function for Check button with event listener and set all the conditions one by one

document.querySelector('.check').addEventListener('click',function(){

    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // when no  numbers input

    if(!guess){

        displayMessage("❌ No Number!");
    
    // when guessing number match with secretNumber and player wins

    } else if(guess === secretNumber){

        displayMessage("🎉 Correct Number! 🎉");

        // show secretNumber
        document.querySelector('.number').textContent = secretNumber;

        // background color
        document.querySelector('body').style.backgroundColor = "#60b347";

        // change number box size
        document.querySelector('.number').style.width = "30rem";

        // show high score
        if(score > highScore){
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }
     
        // when guess is wrong
    
    } else if(guess !== secretNumber){

        // make condition
        if(score > 1){

            // use ternary operator
            displayMessage(guess > secretNumber ? "❗Too High!" : "❗Too Low!");
            
            // decrease the score
            score--;

            // show the score
            document.querySelector('.score').textContent = score;

            // to stop the game
        } else {

            displayMessage("😞😞 You loose the Game!!");

            // change the background color
            document.querySelector('body').style.backgroundColor ="red";

            // make the score 0
            document.querySelector('.score').textContent = 0;
        }
    }

});

  // set a function for Again button to replay the Game

   document.querySelector('.again').addEventListener('click',function(){

    // call the variables again
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20 +1);

    // return the old message
    displayMessage("Start guessing...");

    // return score
    document.querySelector('.score').textContent = score;

    // return number box
    document.querySelector('.number').textContent = "?";

    // return old number box size
    document.querySelector('.number').style.width = "15rem";

    // return the guess box value
    document.querySelector('.guess').value = "";

    // set the old background color
    document.querySelector('body').style.backgroundColor ="#222";


});

//======================================================================//