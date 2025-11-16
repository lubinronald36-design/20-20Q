const quizContainer = document.getElementById('quiz-container');
let currentQuestion = 0;
let score = 0;

function generateQuiz() {
  const currentQuestionData = questions[currentQuestion];
  const questionElement = document.createElement('div');
  questionElement.classList.add('question');

  const questionText = document.createElement('p');
  questionText.textContent = currentQuestionData.question;
  questionElement.appendChild(questionText);

  const options = currentQuestionData.options.map((option, index) => {
    const optionElement = document.createElement('button');
    optionElement.textContent = option;
    optionElement.onclick = checkAnswer;
    return optionElement;
  });

  options.forEach(option => questionElement.appendChild(option));
  quizContainer.appendChild(questionElement);
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questions[currentQuestion].correctAnswer;
  const questionElement = quizContainer.children[0];

  if (selectedAnswer === correctAnswer) {
    score++;
    questionElement.classList.add('correct');
  } else {
    questionElement.classList.add('incorrect');
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      displayResult();
    } else {
      quizContainer.innerHTML = '';
      generateQuiz();
    }
  }, 1000);
}

function displayResult() {
  quizContainer.innerHTML = '';
  const resultElement = document.createElement('p');
  resultElement.textContent = You scored ${score} out of ${questions.length};
  quizContainer.appendChild(resultElement);
}

generateQuiz();
