const quizQuestions = [
  {
    question: "What is the chemical symbol for water?",
    answer: "h2o"
  },
  {
    question: "Which gas do plants absorb from the air for photosynthesis?",
    answer: "co2"
  },
  {
    question: "What force pulls objects towards the center of the Earth?",
    answer: "gravity"
  },
  {
    question: "Which part of the cell contains genetic material (DNA)?",
    answer: "nucleus"
  },
  {
    question: "What is the nearest star to Earth?",
    answer: "sun"
  }
];


function runQuiz() {
  let score = 0; 


  for (let i = 0; i < quizQuestions.length; i++) {
    const currentQuestion = quizQuestions[i];

    
    let userAnswer = prompt(`Q${i + 1}: ` + currentQuestion.question);

    
    if (userAnswer === null) {
      alert("Quiz cancelled!");
      return;
    }

    
    userAnswer = userAnswer.toLowerCase().trim();

    
    if (userAnswer === currentQuestion.answer) {
      score++;
      
      alert("Correct!");
    } else {
      alert("Wrong! The correct answer is: " + currentQuestion.answer);
    }
  }

  
  alert("Quiz finished! Your score: " + score + " / " + quizQuestions.length);
}
runQuiz();