'use strict'

STORE = [{question: "How many wives did Henry VIII have?", 
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
    $('.start-button').on('click', function (event) {
        for (let i = 0; i < 5; i++) {
            let currentSTORE = STORE[i];
        
        let insertHTML = $(`<div class="question-form">
           <p>${currentSTORE.question}</p>
            <ul>
                <li>${currentStore.options[0]}</li>
                <li>${currentStore.options[1]}</li>
                <li>${currentStore.options[2]}</li>
                <li>${currentStore.options[3]}</li>
         </div>)`);
        })

    $(".main").html(insertHTML);
    console.log('this ran')
    }
};


//update score 

function updateScore() {

};


//update question number

function updateQuestionNumber() {
    store.questionNumber++;

};



//present the question, and the next button

function presentQuestion() {

};


//question is correct

function correctQuestion() {

};


//question is incorrect

function incorrectQuestion() {

};


//passed the quiz

function passedQuiz() {

};


//failed the quiz

function failedQuiz() {

};


//reset the quiz

function resetQuiz() {

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
