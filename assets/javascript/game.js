//alert('here1');
      var myWordText = document.getElementById("myword");
      var guessessofarText = document.getElementById("guesses-so-far");
      var guessessofaruserText = document.getElementById("guesses-so-far-user");
      var guessesleftText = document.getElementById("guesses-left");
      var guessesleftnumText = document.getElementById("guesses-left-num");
      var winsText = document.getElementById("wins");
      var lossesText = document.getElementById("losses");
      var ndfightsongdiv = document.getElementById("ndfightsong");
      var guessesleft = 12;
      var wins = 0;
      var losses = 0;
      var userChose = "";
      var randomWord = "";
      var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      var words = ["irish", "notredame", "football", "leprechaun"];
      var lettersUncovered = 0;

      //computer chooses a random word
      randomWord = words[Math.floor(Math.random() * words.length)];

      //initialize the game
      guessesleftnumText.textContent = 12;

      //reset the word
      myWordText.textContent = "";
      
      //generate the word in the DOM
      for (var i = 0; i < randomWord.length; i++) {
        var newSpan = document.createElement("span")
        newSpan.textContent = "_ ";
        newSpan.setAttribute("id",i);
        myWordText.appendChild(newSpan);
      }

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {    
        //which letter did the user chooose
        //allow for upper case letters too
        userChose = event.key.toLowerCase();
        //alert('here3');

        
        console.log("here1");
        //user chose a lower case letter from the alphabet
        if (letters.indexOf(userChose) != -1) {
          console.log("here2");
          var indexofletterinword = randomWord.indexOf(userChose)
          //the user guesses a letter correctly
          if (indexofletterinword != -1) {
            console.log("here11");
            console.log("guesses of user indexed by userchoice: " + guessessofaruserText.textContent.indexOf(userChose))
           if (guessessofaruserText.textContent.indexOf(userChose) === -1) {//and it hasn't already been chosen
            console.log("here9");
            for (var j=0;j< randomWord.length; j++) { 
              console.log("here3");
              if (randomWord[j] === userChose) {
                //display the letter in the word            
                var userChosenLetter = document.getElementById(j);
                userChosenLetter.textContent = userChose;
                lettersUncovered++;
              }
            }
            console.log("letters uncovered: " + lettersUncovered)
            //if the user has uncovered all of the letters
            if (lettersUncovered === randomWord.length) {
              console.log("here4");
              ndfightsongdiv.innerHTML = "<audio autoplay><source src=\"assets/songs/ndfightsong.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>" 
              wins++;
              guessessofaruserText.textContent = "";
              mySpan = document.createElement("span");
              mySpan.setAttribute("id","guesses-so-far-user")
              guessessofarText.appendChild(mySpan);
              winsText.textContent = "Wins: "+ wins;
              guessesleft = 12;
              guessesleftText.textContent = "Guesses Left: ";
              var mySpan = document.createElement("span");
              mySpan.setAttribute("id","guesses-left-num")
              mySpan.textContent = "12";
              guessesleftText.appendChild(mySpan); 
              //computer chooses a random word
              randomWord = words[Math.floor(Math.random() * words.length)];
              //reset the word
              myWordText.textContent = "";
              //generate the word in the DOM
              for (var i = 0; i < randomWord.length; i++) {
                var newSpan = document.createElement("span")
                newSpan.textContent = "_ ";
                newSpan.setAttribute("id",i);
                myWordText.appendChild(newSpan);
              }
              lettersUncovered = 0;
            } else if (guessesleft > 1) {//if number of guesses is down to 0, then lose
              console.log("here5");
              //decrease guesses, add guesses to guess queue
              guessesleft--;
              guessesleftnumText = document.getElementById("guesses-left-num");
              guessesleftnumText.textContent = guessesleft;
              guessessofaruserText = document.getElementById("guesses-so-far-user");
              guessessofaruserText.textContent = guessessofaruserText.textContent + "," + userChose;
            } 
            else {
              console.log("here6");
              //the user used up all of his guesses and lost the game
              losses++;
              lettersUncovered = 0;
              lossesText.textContent = "Losses: " + losses;
              guessesleft = 12;
              guessesleftText.textContent = "Guesses Left: ";
              var mySpan = document.createElement("span");
              mySpan.setAttribute("id","guesses-left-num")
              mySpan.textContent = "12";
              guessesleftText.appendChild(mySpan);
              guessessofarText.textContent = "Your Guesses So Far: ";
              mySpan = document.createElement("span");
              mySpan.setAttribute("id","guesses-so-far-user")
              guessessofarText.appendChild(mySpan);
              //computer chooses a new word
              randomWord = words[Math.floor(Math.random() * words.length)];
              //reset the word
               myWordText.textContent = "";
              //generate the word in the DOM
              for (var i = 0; i < randomWord.length; i++) {
                var newSpan = document.createElement("span")
                newSpan.textContent = "_ ";
                newSpan.setAttribute("id",i);
                myWordText.appendChild(newSpan);
              }
              lettersUncovered = 0;

            }
          }
        } else { //the user did not choose a letter that exists in the word
            console.log("here7");
              //decrease guesses, add guesses to guess queue
              guessesleft--;
              if (guessesleft > 1) {//if number of guesses is down to 0, then lose
                console.log("here8");
                //decrease guesses, add guesses to guess queue
                // guessesleft--;
                guessesleftnumText = document.getElementById("guesses-left-num");
                guessesleftnumText.textContent = guessesleft;
                guessessofaruserText = document.getElementById("guesses-so-far-user");
                guessessofaruserText.textContent = guessessofaruserText.textContent + "," + userChose;
              } 
              else {
                console.log("here9");
                //the user used up all of his guesses and lost the game
                losses++;
                lettersUncovered = 0;
                lossesText.textContent = "Losses: " + losses;
                guessesleft = 12;
                guessesleftText.textContent = "Guesses Left: ";
                var mySpan = document.createElement("span");
                mySpan.setAttribute("id","guesses-left-num")
                mySpan.textContent = "12";
                guessesleftText.appendChild(mySpan);
                guessessofarText.textContent = "Your Guesses So Far: ";
                mySpan = document.createElement("span");
                mySpan.setAttribute("id","guesses-so-far-user")
                guessessofarText.appendChild(mySpan);
                //computer chooses a new word
                randomWord = words[Math.floor(Math.random() * words.length)];
                //reset the word
                myWordText.textContent = "";
                //generate the word in the DOM
                for (var i = 0; i < randomWord.length; i++) {
                  var newSpan = document.createElement("span")
                  newSpan.textContent = "_ ";
                  newSpan.setAttribute("id",i);
                  myWordText.appendChild(newSpan);
                }
                lettersUncovered = 0;

              }
          }
        } else {
           //alert("Please choose a letter from the alphabet");
        }
      };
