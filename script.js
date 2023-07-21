// JavaScript untuk game kuis matematika
const questions = [
  {
    question: "Berapakah hasil dari 2 + 3?",
    answer: 5,
  },
  {
    question: "Berapakah hasil dari 5 - 2?",
    answer: 3,
  },
  {
    question: "Berapakah hasil dari 4 * 6?",
    answer: 24,
  },
  {
    question: "Berapakah hasil dari 12 / 3?",
    answer: 4,
  },
  {
    question: "Berapakah hasil dari 8 + 9?",
    answer: 17,
  },
  {
    question: "Berapakah hasil dari 15 - 6?",
    answer: 9,
  },
  {
    question: "Berapakah hasil dari 7 * 5?",
    answer: 35,
  },
  {
    question: "Berapakah hasil dari 20 / 4?",
    answer: 5,
  },
  {
    question: "Berapakah hasil dari 10 + 2?",
    answer: 12,
  },
  {
    question: "Berapakah hasil dari 16 - 8?",
    answer: 8,
  },
  // Tambahkan pertanyaan lain di sini
];

let currentQuestionIndex = 0;
let playerName = "";
let playerPassword = "";
let correctAnswers = 0;
let wrongAnswers = 0;

function startGame() {
  const playerNameInput = document.getElementById("player-name");
  const playerPasswordInput = document.getElementById("player-password");

  playerName = playerNameInput.value;
  playerPassword = playerPasswordInput.value;

  if (playerPassword !== "123456") {
    alert("Password yang Anda masukkan salah. Silakan coba lagi.");
    return;
  }

  playerNameInput.disabled = true;
  playerPasswordInput.disabled = true;
  document.querySelector(".player-info button").disabled = true;

  showQuestion();
}

function showQuestion() {
  const questionBox = document.querySelector(".question-box");
  questionBox.style.display = "block";

  const questionElement = document.getElementById("question");
  questionElement.innerText = questions[currentQuestionIndex].question;

  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);

  if (isNaN(userAnswer)) {
    alert("Masukkan jawaban dalam bentuk angka.");
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];

  // Cek jawaban
  if (userAnswer === currentQuestion.answer) {
    displayResult("Jawaban benar!", "#2ecc71");
    correctAnswers++;
  } else {
    displayResult("Jawaban salah!", "#e74c3c");
    wrongAnswers++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    showResult();
  } else {
    setTimeout(showQuestion, 60); // Tambahkan penundaan sebelum pertanyaan selanjutnya muncul
  }
}

function displayResult(message, color) {
  const resultElement = document.getElementById("result");
  resultElement.innerText = message;
  resultElement.style.color = color;

  setTimeout(() => {
    resultElement.innerText = "";
  }, 1000);
}

function showResult() {
  const questionBox = document.querySelector(".question-box");
  const scoreBox = document.querySelector(".score-box");
  const answeredQuestions = document.querySelector(".answered-questions");
  const scoreAnalysis = document.querySelector(".score-analysis");

  questionBox.style.display = "none";
  scoreBox.style.display = "none";
  answeredQuestions.style.display = "block";
  scoreAnalysis.style.display = "block";

  // Update hasil analisis
  const correctCountElement = document.getElementById("correct-count");
  const wrongCountElement = document.getElementById("wrong-count");
  const scorePercentageElement = document.getElementById("score-percentage");

  const totalQuestions = questions.length;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  correctCountElement.innerText = `Jawaban Benar: ${correctAnswers}`;
  wrongCountElement.innerText = `Jawaban Salah: ${wrongAnswers}`;
  scorePercentageElement.innerText = `Persentase Skor: ${scorePercentage.toFixed(2)}%`;
}
