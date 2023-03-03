const data = [
  {
    id: 1,
    question: "Which of the following is not Object-Oriented Language?",
    answers: [
      { answer: "C", isCorrect: true },
      { answer: "Java", isCorrect: false },
      { answer: "Python", isCorrect: false },
      { answer: "C++", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Which is non-linear data struture:",
    answers: [
      { answer: "Stack", isCorrect: false },
      { answer: "Linked lists", isCorrect: false },
      { answer: "Graphs", isCorrect: true },
      { answer: "Queue", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "Stack operates on principle of?",
    answers: [
      { answer: "FIFO", isCorrect: false },
      { answer: "LIFO", isCorrect: true },
      { answer: "None of the above", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const questions = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submitButton = document.querySelector(".submit");
const playButton = document.querySelector(".play");
const contentScreen = document.querySelector(".content");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;

  showQuestion(qNumber);
};

playButton.addEventListener("click", () => {
  contentScreen.style.display = "block";
  resultScreen.style.display = "none";
  playAgain();
});

const showResult = () => {
  contentScreen.style.display = "none";
  resultScreen.style.display = "block";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers : ${correctCount}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers : ${wrongCount}`;
  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  questions.textContent = data[qNumber].question;

  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `<div class="answer">
                <input name="answer" type="radio" id="${index}" value="${item.isCorrect}" />
                <label for="${index}">${item.answer}</label>
              </div>`
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
      console.log(selectedAnswer);
    });
  });
};

const submitAnswer = () => {
  submitButton.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};
showQuestion(qIndex);
submitAnswer();
