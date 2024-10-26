// Variables to track quiz progress
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 0;
let timer;

// Get references to DOM elements
const mainPage = document.getElementById("main-page");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const timerElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const skipButton = document.getElementById("skip-button");

// Event listeners for buttons
nextButton.addEventListener("click", showNextQuestion);
skipButton.addEventListener("click", skipQuestion);

// Load the quiz selection page at startup
loadQuizSelection();

// Load the main quiz selection page
function loadQuizSelection() {
  const quizSelection = document.getElementById("quiz-selection");
  quizSelection.innerHTML = ""; // Clear previous content if any

  quizzes.forEach((quiz, index) => {
    const quizButton = document.createElement("button");
    quizButton.classList.add("quiz-icon");
    quizButton.onclick = () => startQuiz(index);

    const icon = document.createElement("img");
    icon.src = quiz.icon;
    icon.alt = `${quiz.title} Icon`;

    const title = document.createElement("span");
    title.textContent = quiz.title;

    const subtitle = document.createElement("p");
    subtitle.textContent = quiz.subtitle;

    quizButton.appendChild(icon);
    quizButton.appendChild(title);
    quizButton.appendChild(subtitle);
    quizSelection.appendChild(quizButton);
  });
}


let maxScore = 0;

// Calculate the maximum possible score at the start of the quiz
function calculateMaxScore() {
  maxScore = currentQuiz.reduce((total, question) => total + question.timeLimit, 0);
}


// Start the selected quiz
function startQuiz(index) {
  currentQuiz = quizzes[index].questions;
  currentQuestionIndex = 0;
  score = 0;

  // Calculate the maximum score for the selected quiz
  calculateMaxScore();  

  mainPage.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");

  // Show the first question
  showQuestion(currentQuestionIndex);
}

// Display a question and its choices
function showQuestion(questionIndex) {
  clearInterval(timer); // Clear previous timer
  hideButtons(); // Ensure both buttons are hidden initially

  if (questionIndex < currentQuiz.length) {
    const question = currentQuiz[questionIndex];
    // Set up the question title with the counter
    questionElement.textContent = `Pergunta ${questionIndex + 1} de ${currentQuiz.length}: ${question.question}`;

    timeLeft = question.timeLimit;
    timerElement.textContent = timeLeft;
    choicesElement.innerHTML = "";

    // Add choices as buttons
    question.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => selectAnswer(choice, question.answer);
      choicesElement.appendChild(button);
    });

    showSkipButton(); // Show the skip button initially
    startTimer();
  } else {
    endQuiz();
  }
}







// Start the countdown timer for each question
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showNextButton(); // Show Next button when time runs out
    }
  }, 1000);
}

// Handle answer selection
function selectAnswer(selectedChoice, correctAnswer) {
  clearInterval(timer); // Stop the timer on answer selection

  // Update score if the answer is correct
  if (selectedChoice === correctAnswer) {
    score += timeLeft;
  }

  showNextButton(); // Show Next button after selecting an answer
}

// Show the Next button and hide the Skip button
function showNextButton() {
  console.log("Showing Next button, hiding Skip button");
  nextButton.classList.remove("hidden");
  skipButton.classList.add("hidden");
}

// Show the Skip button and hide the Next button
function showSkipButton() {
  console.log("Showing Skip button, hiding Next button");
  skipButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
}

// Hide both buttons
function hideButtons() {
  console.log("Hiding both buttons");
  nextButton.classList.add("hidden");
  skipButton.classList.add("hidden");
}

// Skip the current question without scoring and move to the next one
function skipQuestion() {
  clearInterval(timer); // Stop the timer immediately
  showQuestion(++currentQuestionIndex); // Move directly to the next question
}

// Show the next question or end the quiz if it’s the last question
function showNextQuestion() {
  currentQuestionIndex++;
  hideButtons(); // Hide buttons before loading the next question
  showQuestion(currentQuestionIndex); // Display the next question
}



function returnToMain() {
  isConfettiActive = false; // Set the flag to false to stop the animation
  confetti.reset(); // Clear any confetti bursts on the screen

  // Reset the quiz and go back to the main page
  mainPage.classList.remove("hidden");
  quizContainer.classList.add("hidden");
  resultContainer.classList.add("hidden");
}


// End the quiz and show confetti only if score is 25% or more of maxScore
function endQuiz() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.textContent = score;

  // Check if the score meets the threshold for fireworks
  const threshold = 0.0005 * maxScore;
  if (score >= threshold) {
    launchConfetti();
  }
}


let confettiAnimationId; // Variable to store the animation ID for confetti
let isConfettiActive = false; // Flag to control confetti animation

function launchConfetti() {
  // Set up multiple bursts of confetti for a more vibrant effect
  const duration = 10 * 1000; // 3 seconds
  const end = Date.now() + duration;
  isConfettiActive = true; //

  (function frame() {
    if (!isConfettiActive) return; 
    // Create a burst of confetti
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 100,
      origin: { x: 0 },
      colors: ['#ff595e', '#8ac926', '#1982c4', '#6a4c93', '#f0c419']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 100,
      origin: { x: 1 },
      colors: ['#ff595e', '#8ac926', '#1982c4', '#6a4c93', '#f0c419']
    });

    // Continue bursts at intervals until the duration is over
    if (Date.now() < end) {
      confettiAnimationId = requestAnimationFrame(frame);
    }
  })();
}
