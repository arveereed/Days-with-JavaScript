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

let balance = deposit();