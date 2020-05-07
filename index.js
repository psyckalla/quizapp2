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
{totalQuestion: 0}, 
{storedScore: 0}];

//hide start button

function hideStartButton() {
    $(".start-button").on('click', function (event) {
        $(".start-button").hide();


    });
    
    
    console.log('hidestartbutton ran');
    console.log($('.question-number'));
};


// start the quiz
function startQuiz() {
    hideStartButton();
    console.log('startquiz ran');

};



//update score 

function updateScore() {

    console.log('updatescore ran');

};



//present the question, and the next button

function presentQuestion() {
    
    let i = 0;
    if (i < 5) {
    $('.start-button, .next-button').on('click', function(event) {
    $('.main').html('<p>' + STORE[i].question + '</p>' + 
    '<input name="test" type="radio" value="inc" />' + STORE[i].options[0] +
    '<input name="test" type="radio" value="inc" />' + STORE[i].options[1] +
    '<input name="test" type="radio" value="inc" />' + STORE[i].options[2] +
    '<input name="test" type="radio" value="inc" />' + STORE[i].options[3]);
    $('input[name="test"]').on('click', function() {
        if ($(this).val() === STORE[i].correct) {
             ('.main').html('BOOYAH');
             $('.start-button').html('booyah')
        } else {
             
            }
        });
    $('.question-number').html(STORE[5].totalQuestion+=1);
    
    i += 1;
    console.log('presentquestion ran');
    });
} else if (i === 5) {
    this.reload(true);
}
};



//next question

function nextQuestion() {
    $('.next-button', '.start-button').on('click', function(event) {
        $('.main').html('<p>' + STORE[STORE[5].totalQuestion].question + '</p>' +
        '<button class="next-button">Next</button>');
        $('.question-number').html(STORE[5].totalQuestion+=1);
    });
};


//question is correct

function correctQuestion() {
    $('input[name="test"]').on('click', function() {
        if ($(this).val() === STORE[i].correct) {
             ('.main').html('BOOYAH')
        } else {
             
            }
        })
        

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
    presentQuestion();
    correctQuestion();
};

$(generateQuiz());