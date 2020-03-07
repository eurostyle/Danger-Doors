let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");

let level = document.getElementById("level");
let totalPoints = document.getElementById("totalPoints");
let incorrectEntries = document.getElementById("incorrectEntries");
let correctEntriesStreak = document.getElementById("correctEntries");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

let highScore = document.getElementById("highScore");

let totalPointsCounter = 0;
let incorrectEntriesCounter = 0;
totalPoints.innerHTML = 0;
incorrectEntries.innerHTML = 0;
correctEntriesStreak.innerHTML = 0;

level.innerHTML = 0;

let correctGuessTmp = 0;
let incorrectGuessTmp = 0;
let totalGuessTmp = 0;

function generateRandomNum() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
}

function levelCheckToAdvance() {
  if (totalGuessTmp >= 10) {
    if (
      correctGuessTmp - level.innerHTML - incorrectGuessTmp >=
      incorrectGuessTmp
    ) {
      totalGuessTmp = 0;
      correctGuessTmp = 0;
      incorrectGuessTmp = 0;

      return level.innerHTML++;
    } else if (level.innerHTML != 0) {
      totalGuessTmp = 0;
      correctGuessTmp = 0;
      incorrectGuessTmp = 0;

      return level.innerHTML--;
    } else {
      totalGuessTmp = 0;
      correctGuessTmp = 0;
      incorrectGuessTmp = 0;
    }
  }
}

function checkHighScore() {
  if (highScore.innerHTML < correctEntriesStreak.innerHTML) {
    highScore.innerHTML = correctEntriesStreak.innerHTML;
  }
}

// event listeners to check if cards matches generated random number
button1.addEventListener("click", function() {
  if (generateRandomNum() === 1) {
    card1.style = "background-color: Darkred;";
    incorrectEntriesCounter++;
    incorrectEntries.innerHTML = incorrectEntriesCounter; //stats
    correctEntriesStreak.innerHTML = 0;
    incorrectGuessTmp++; // resetting internal counter, important for lvl checking
    totalGuessTmp++;
    levelCheckToAdvance();
    card1.style.animationName = null;
    card1.style.animationName = "shake";

    window.setTimeout(function() {
      card1.style = "background-color: #4b125c;"; // timer to reverse card back to original color
    }, 350);
  } else {
    card1.style = "background-color: Darkgreen;";
    totalPointsCounter++;
    totalPoints.innerHTML = totalPointsCounter;
    correctEntriesStreak.innerHTML++;
    correctGuessTmp++;
    totalGuessTmp++;
    levelCheckToAdvance();
    checkHighScore();

    window.setTimeout(function() {
      card1.style = "background-color: #4b125c;";
    }, 350);
  }
});

button2.addEventListener("click", function() {
  if (generateRandomNum() === 2) {
    card2.style = "background-color: Darkred;";
    incorrectEntriesCounter++;
    incorrectEntries.innerHTML = incorrectEntriesCounter;
    correctEntriesStreak.innerHTML = 0;
    incorrectGuessTmp++;
    totalGuessTmp++;
    levelCheckToAdvance();
    card2.style.animationName = null;
    card2.style.animationName = "shake";

    window.setTimeout(function() {
      card2.style = "background-color: #4b125c;";
    }, 350);
  } else {
    card2.style = "background-color: Darkgreen;";
    totalPointsCounter++;
    totalPoints.innerHTML = totalPointsCounter;
    correctEntriesStreak.innerHTML++;
    correctGuessTmp++;
    totalGuessTmp++;
    levelCheckToAdvance();
    checkHighScore();

    window.setTimeout(function() {
      card2.style = "background-color: #4b125c;";
    }, 350);
  }
});

button3.addEventListener("click", function() {
  if (generateRandomNum() === 3) {
    card3.style = "background-color: Darkred;";
    incorrectEntriesCounter++;
    incorrectEntries.innerHTML = incorrectEntriesCounter;
    correctEntriesStreak.innerHTML = 0;
    incorrectGuessTmp++;
    totalGuessTmp++;
    levelCheckToAdvance();
    card3.style.animationName = null;
    card3.style.animationName = "shake";

    window.setTimeout(function() {
      card3.style = "background-color: #4b125c;";
    }, 350);
  } else {
    card3.style = "background-color: Darkgreen;";
    totalPointsCounter++;
    totalPoints.innerHTML = totalPointsCounter;
    correctEntriesStreak.innerHTML++;
    correctGuessTmp++;
    totalGuessTmp++;
    levelCheckToAdvance();
    checkHighScore();

    window.setTimeout(function() {
      card3.style = "background-color: #4b125c;";
    }, 350);
  }
});
