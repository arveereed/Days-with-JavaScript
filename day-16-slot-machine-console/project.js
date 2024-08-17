/*  STEPS
1. Deposit some money
2. Determine the number of lines to bet on
3. Collect a bet amount
4. Spin the slot machine
5. Check if the user won
6. Give the user their winnings
7. Play Again
*/

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt('Enter a deposit amount: ');
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("ERROR: Invalid deposit amount, try again.\n");
    } else {
      return numberDepositAmount;
    }
  }
}

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter a number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("ERROR: Invalid number of lines, try again.\n");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberOfBet = parseFloat(bet);

    if (isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance / lines) {
      console.log("ERROR: Invalid bet, try again.\n");
    } else {
      return numberOfBet;
    }
  }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);