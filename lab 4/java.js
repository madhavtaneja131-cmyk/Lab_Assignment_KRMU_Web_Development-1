// Quiz questions array
const quizQuestions = [
  { question: "How many ODI world Cup India had won?", answer: "Two" },
  { question: "How many T20 world Cup India had won?", answer: "Two" },
  { question: "Who had made most centuries in international cricket?", answer: "Sachin Tendulkar" },
  { question: "Who had made most ODI centuries in international cricket?", answer: "Virat Kohli" },
  { question: "Who hits most interational sixes in ODI? ", answer: "Rohit Sharma" }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // Initialize score

  for (let i = 0; i < quizQuestions.length; i++) {
    const userAnswer = prompt(quizQuestions[i].question);

    // Check answer (case-insensitive + trimmed)
    if (userAnswer &&
        userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()
    ) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
    }
  }

  // Final score
  alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

// Run the quiz automatically
runQuiz();