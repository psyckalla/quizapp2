'use strict'

const STORE = [{question: "How many wives did Henry VIII have?", 
options: [4, 1, 8, 6], 
correct: 6}, 
{question: "Henry VIII was succeeded by:", 
options: ["Mary I of England", "Edward VI of England", "Elizabeth I of England", "Mary Queen of Scots"], 
correct: "Edward VI of England"},
{question: "Henry VIII annuled his marriage to:", 
options: ["Catherine of Aragorn", "Jane Seymour", "Anne Boleyn", "Anne of Cleves"], 
correct: "Catherine of Aragorn"},
{question: "Which of Henry VIII's wives gave birth to his heir?",
options: ["Catherine of Aragorn", "Anne Boleyn", "Jane Seymour", "Anne of Cleves"],
correct: "Anne of Cleves"},
{question: "Which wife did Henry VIII execute?",
options: ["Catherine of Aragorn", "Anne Boleyn", "Jane Seymour", "Anne of Cleves"],
correct: "Anne of Cleves"}, 
{questionNumber: 0}, 
{storedScore: 0}];

//start the quiz

function startQuiz() {
    


    console.log('start quiz ran');
};


//update score 

function updateScore() {

    console.log('updatescore ran');

};


//update question number

function updateQuestionNumber() {

    console.log('updatequestionnumber ran');

};



//present the question, and the next button

function presentQuestion() {

    console.log('presentquestion ran');

};


//question is correct

function correctQuestion() {

    console.log('correctquestion ran');

};


//question is incorrect

function incorrectQuestion() {

    console.log('incorrectquestion ran');

};


//passed the quiz

function passedQuiz() {

    console.log('passedquiz ran');

};


//failed the quiz

function failedQuiz() {

    console.log('failedquiz ran');

};


//reset the quiz

function resetQuiz() {

    console.log('resetquiz ran');

};

function generateQuiz() {
    startQuiz();
    resetQuiz();
    failedQuiz();
    passedQuiz();
    incorrectQuestion();
    correctQuestion();
    presentQuestion();
    updateQuestionNumber();
    updateScore();
};

$(generateQuiz());
