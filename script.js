const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    correct: 0,
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "HTML", "Java"],
    correct: 2,
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.querySelector(".options-container");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreSpan = document.getElementById("score");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.innerText = option;
    button.addEventListener("click", () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestionIndex].correct;

  if (selectedIndex === correctIndex) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  nextButton.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreSpan.innerText = `${score} / ${quizData.length}`;
}

// Initialize the quiz
loadQuestion();
