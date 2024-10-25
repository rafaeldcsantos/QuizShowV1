// script.js
const questions = [
    { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", choices: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    // Add more questions as needed (total of 10)
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 10;
  let timer;
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const timerElement = document.getElementById("time");
  const nextButton = document.getElementById("next-button");
  const resultContainer = document.getElementById("result-container");
  const scoreElement = document.getElementById("score");
  
  function startTimer() {
    timeLeft = 10;
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        showNextQuestion();
      }
    }, 1000);
  }
  
  function showQuestion(questionIndex) {
    clearInterval(timer);
    const question = questions[questionIndex];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
    question.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => selectAnswer(choice, question.answer);
      choicesElement.appendChild(button);
    });
    startTimer();
  }
  
  function selectAnswer(selectedChoice, correctAnswer) {
    clearInterval(timer);
    if (selectedChoice === correctAnswer) {
      score += timeLeft; // Add remaining time to score if correct
    }
    showNextQuestion();
  }
  
  function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(currentQuestionIndex);
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    document.getElementById("question-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = score;
  }
  
  nextButton.onclick = showNextQuestion;
  
  // Initialize quiz
  showQuestion(currentQuestionIndex);
  