const questions = [
  {
    question: "Which is a largest animal in the world?",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Blue whale",
        correct: true,
      },
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
  {
    question: "Which is a smallest country in the world?",
    answers: [
      {
        text: "Vatican City",
        correct: true,
      },
      {
        text: "Bhutan",
        correct: false,
      },
      {
        text: "Philippines",
        correct: false,
      },
      {
        text: "Shri Lanka",
        correct: false,
      },
    ],
  },
  {
    question: "Which is a largest desert in the world?",
    answers: [
      {
        text: "Kalahari",
        correct: false,
      },
      {
        text: "Gobi",
        correct: false,
      },
      {
        text: "Sahara",
        correct: false,
      },
      {
        text: "Antarctica",
        correct: true,
      },
    ],
  }
];

const questionElement = document.getElementById('question');
const answerContainer = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

 currentQuestion.answers.forEach(answer => {
  const button = document.createElement('button');
  button.classList.add('btn');
  button.innerHTML = answer.text;
  answerContainer.appendChild(button);

  if(answer.correct) {
    button.dataset.correct = answer.correct;
  }

  button.addEventListener('click', selectAnswer);
 });
}

function resetState() {
  nextBtn.style.display = 'none';
  while(answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild);
  }
}

function selectAnswer(element) {
  const selectedBtn = element.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  
  if(isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerContainer.children).forEach(button => {
    if(button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextBtn.style.display = 'block';
}

function showScore() {
  resetState();
  questionElement.innerHTML =`You scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = 'Play Again';
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;

  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
} 

nextBtn.addEventListener('click', () => {
  if(currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();