'use strict'

const STORE = [{question: "How many wives did Henry VIII have?", 
options: [4, 1, 8, 6], 
correct: "D"}, 
{question: "Henry VIII was succeeded by:", 
options: ["Mary I of England", "Edward VI of England", "Elizabeth I of England", "Mary Queen of Scots"], 
correct: "B"},
{question: "Henry VIII annuled his marriage to:", 
options: ["Catherine of Aragorn", "Jane Seymour", "Anne Boleyn", "Anne of Cleves"], 
correct: "A"},
{question: "Which of Henry VIII's wives gave birth to his heir?",
options: ["Catherine of Aragorn", "Anne Boleyn", "Jane Seymour", "Anne of Cleves"],
correct: "C"},
{question: "Which wife did Henry VIII execute?",
options: ["Catherine of Aragorn", "Anne Boleyn", "Jane Seymour", "Anne of Cleves"],
correct: "B"}, 
{totalQuestion: 0}];

//hide start button

function hideStartButton() {
    $('.start-button').on('click', function(event) {
        $('.next-button').removeClass('hidden');
        $('.start-button').addClass('hidden');
    })
};


//present the question, and the next button

function presentQuestion() {
    let i = 0;
    let correctScore = 0;
    let incorrectScore = 0;
    
    $('.start-button, .next-button').on('click', function(event) {
        $('.main').html(`<p>${STORE[i].question}</p><input name="test" type="radio" value="A" />${STORE[i].options[0]}<input name="test" type="radio" value="B" />${STORE[i].options[1]}<input name="test" type="radio" value="C" />${STORE[i].options[2]}<input name="test" type="radio" value="D" />${STORE[i].options[3]}`);

            $('input[name="test"]').on('click', function() {
                if ($(this).val() == STORE[i-1].correct) {
                    correctScore += 1;
             } else {
                 incorrectScore += 1;

            };
        });
        $('.question-number').html(i + 1);
        $('.stored-scored').html(correctScore);
        $('.stored-incorrect').html(incorrectScore);
        i++;
    });

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
    hideStartButton();
    presentQuestion();
};

$(generateQuiz());