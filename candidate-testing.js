const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [];
let correctAnswers = [];
let candidateAnswers = [];


function askForName() {
  candidateName = (input.question("What is your name: "));
  console.log(`Hi, ${candidateName} !`)
}
questions = [
  "What is your name: ",
  "Who was the first American woman in space: ",
  "True or false: 5 kilometer === 5000 meters: ",
  "(5+3)/2*10= : ",
  "Given the array [8, 'Orbit', 'Trajectory', 45] What entry is at index 2: ",
  "What is the minimum crew size for the ISS: "
];
correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
let totalQuestions = questions.length;

for (let i = 0; i < totalQuestions; i++) {
  candidateAnswers[i] = input.question(`${i + 1})
}


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
function gradeQuiz(candidateAnswers) {
  if (candidateAnswer === "Sally Ride") {
    console.log("Your answer is correct!");
  } else {
    console.log('Your answer is incorrect! Try again!')
  }


  let grade;
  

  return grade;
}


  // TODO 1.1c: Ask for candidate's name //
function runProgram() {
  askForName();  
  

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