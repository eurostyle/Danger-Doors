const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

const level = document.getElementById("level");
const totalPoints = document.getElementById("totalPoints");
const incorrectEntries = document.getElementById("incorrectEntries");
const correctEntriesStreak = document.getElementById("correctEntries");
const correctEntrieThisLevel = document.getElementById("correctLevelEntries");
const incorrectThisLevel = document.getElementById("incorrectLevelEntries");
const completionChance = document.getElementById("completionChance");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const highScore = document.getElementById("highScore");

totalPointsCounter = 0;
incorrectEntriesCounter = 0;
totalPoints.innerHTML = 0;
incorrectEntries.innerHTML = 0;
correctEntriesStreak.innerHTML = 0;
correctEntrieThisLevel.innerHTML = 0;
incorrectThisLevel.innerHTML = 0;

//completionChanceTmp = 100;
//completionChance.innerHTML = `${completionChanceTmp} %`;

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
			correctEntrieThisLevel.innerHTML = 0;
			incorrectThisLevel.innerHTML = 0;

			return level.innerHTML++;
		} else if (level.innerHTML != 0) {
			totalGuessTmp = 0;
			correctGuessTmp = 0;
			incorrectGuessTmp = 0;
			correctEntrieThisLevel.innerHTML = 0;
			incorrectThisLevel.innerHTML = 0;

			return level.innerHTML--;
		} else {
			totalGuessTmp = 0;
			correctGuessTmp = 0;
			incorrectGuessTmp = 0;
			correctEntrieThisLevel.innerHTML = 0;
			incorrectThisLevel.innerHTML = 0;
		}
	}
}

function checkHighScore() {
	if (highScore.innerHTML < correctEntriesStreak.innerHTML) {
		highScore.innerHTML = correctEntriesStreak.innerHTML;
	}
}

// function in progress, needs to be reworked

function chanceToComepleteLevel() {
	completionChance.innerHTML = (correctEntrieThisLevel.innerHTML / 10) * 100;
	console.log(completionChance.innerHTML);
	return completionChance;
}

// event listeners to check if cards matches generated random number
button1.addEventListener("click", function() {
	chanceToComepleteLevel();
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
		incorrectThisLevel.innerHTML++;

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
		correctEntrieThisLevel.innerHTML++;

		window.setTimeout(function() {
			card1.style = "background-color: #4b125c;";
		}, 350);
	}
});

button2.addEventListener("click", function() {
	chanceToComepleteLevel();
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
		incorrectThisLevel.innerHTML++;

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
		correctEntrieThisLevel.innerHTML++;

		window.setTimeout(function() {
			card2.style = "background-color: #4b125c;";
		}, 350);
	}
});

button3.addEventListener("click", function() {
	chanceToComepleteLevel();
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
		incorrectThisLevel.innerHTML++;

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
		correctEntrieThisLevel.innerHTML++;

		window.setTimeout(function() {
			card3.style = "background-color: #4b125c;";
		}, 350);
	}
});
