const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
const questions = [ "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? " 
  ];
const correctAnswers = [ 
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3" 
  ];
let candidateAnswers = [];

let totalQuestions = questions.length;

function askForName() {
  candidateName = input.question("Candidate Name: ");
  console.log(`Hi, ${candidateName}!`);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
  // TODO add a counter for each correct answer to be used later for grading the questions.
  for (let i = 0; i < totalQuestions; i++){
    candidateAnswers.push(input.question(`${i+1}) ${questions[i]}`));
    console.log(`Your answer: `+ candidateAnswers[i]);
    console.log(`Correct Answer: ${correctAnswers[i]} \n`);
    } 
}



function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let candidateScore = 0; 
  let grade;
  let passingGrade = 80;

  for (let i = 0; i < totalQuestions; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      candidateScore += 1;
  }
  }
 
  grade = (candidateScore / questions.length) * 100;
  
  console.log(`>>> Overall Grade: ${grade}% (${candidateScore} out of ${totalQuestions} responses correct) <<<`);

  if (grade >= passingGrade) {
    console.log(">>> Status: PASSED");
  } else {
    console.log(">>> Status: FAILED");
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};