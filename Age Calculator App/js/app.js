const calculateBtn = document.getElementById('calculate-btn');
const userInput = document.getElementById('date');
const result = document.getElementById('result');

//  It is used to select from past to current date only
userInput.max = new Date().toISOString().split('T')[0];

function calculateAge() {
  // used to get user birth date
  let birthDate = new Date(userInput.value);

  let date = birthDate.getDate();
  let month = birthDate.getMonth() + 1; // add 1 because the month started from 0
  let year = birthDate.getFullYear();

  // used to get current date
  let today = new Date();

  let tDate = today.getDate();
  let tMonth = today.getMonth() + 1;
  let tYear = today.getFullYear();

  let dateDifference, monthDifference, yearDifference;
  
  yearDifference = tYear - year;

  if (tMonth >= month) {
    monthDifference = tMonth - month;
  } else {
    yearDifference--;
    monthDifference = (12 + tMonth) - month;
  }

  if (tDate >= date) {
    dateDifference = tDate - date;
  } else {
    monthDifference--;
    dateDifference = getDaysInMonth(year, month) + tDate - date;
  }

  if (monthDifference < 0) {
    monthDifference = 11;
    yearDifference--;
  }

  result.innerHTML = `You are <span>${yearDifference}</span> years <span>${monthDifference}</span> months and <span>${dateDifference}</span> days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

calculateBtn.addEventListener('click', () => {
  calculateAge();
});