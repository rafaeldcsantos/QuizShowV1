// This function generates quiz selection buttons on the main page
function loadQuizSelection() {
    const quizSelection = document.getElementById("quiz-selection");
    quizSelection.innerHTML = ""; // Clear previous content if any
  
    quizzes.forEach((quiz, index) => {
      const quizButton = document.createElement("button");
      quizButton.classList.add("quiz-icon");
      quizButton.onclick = () => startQuiz(index); // Calls startQuiz from the main quiz logic
  
      const icon = document.createElement("img");
      icon.src = quiz.icon;
      icon.alt = `${quiz.title} Icon`;
  
      const title = document.createElement("span");
      title.textContent = quiz.title;
  
      const subtitle = document.createElement("p");
      subtitle.textContent = quiz.subtitle;
  
      // Append elements to the button and the button to the container
      quizButton.appendChild(icon);
      quizButton.appendChild(title);
      quizButton.appendChild(subtitle);
      quizSelection.appendChild(quizButton);
    });
  }
  
  // Call loadQuizSelection when this script is loaded
  loadQuizSelection();
  