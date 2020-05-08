'use strict'

const STORE = [{question: "How many wives did Henry VIII have?", 
options: ["A) 4", "B) 1", "C) 8", "D) 6"], 
correct: "D"}, 
{question: "Henry VIII was succeeded by:", 
options: ["A) Mary I of England", "B) Edward VI of England", "C) Elizabeth I of England", "D) Mary Queen of Scots"], 
correct: "B"},
{question: "Henry VIII annuled his marriage to:", 
options: ["A) Catherine of Aragorn", "B) Jane Seymour", "C) Anne Boleyn", "D) Anne of Cleves"], 
correct: "A"},
{question: "Which of Henry VIII's wives gave birth to his heir?",
options: ["A) Catherine of Aragorn", "B) Anne Boleyn", "C) Jane Seymour", "D) Anne of Cleves"],
correct: "C"},
{question: "Which wife did Henry VIII execute?",
options: ["A) Catherine of Aragorn", "B) Anne Boleyn", "C) Jane Seymour", "D) Anne of Cleves"],
correct: "B"}];

//hide start button

function hideStartButton() {
    $('.start-button').on('click', function(event) {
        $('.next-button').removeClass('hidden');
        $('.start-button').addClass('hidden');
    })
};

let i = 0;
let correctScore = 0;
let incorrectScore = 0;
//present the question, and the next button

function presentQuestion() {

    

        $('.start-button, .next-button').on('click', function(event) {
            $('.js-answer').empty();
            $('input[name="test"]').prop('disabled', false);
            console.log('Start/next handler ran');
             console.log($('input[name="test"]').prop('disabled'));
            $('.next-button').addClass('hidden');
            
            if (i < 5) {
                $('.main').html(`<p>${STORE[i].question}</p><input name="test" type="radio" value="A" />${STORE[i].options[0]}<br><input name="test" type="radio" value="B" />${STORE[i].options[1]}<br><input name="test" type="radio" value="C" />${STORE[i].options[2]}<br><input name="test" type="radio" value="D" />${STORE[i].options[3]}`);
                i++;
            } else {
                    $('.main').html(`<p>DONE</p>`);
                    $('.next-button').addClass('hidden');
                    $('.test-score-button').removeClass('hidden');
            };
            $('input[name="test"]').on('click', function() {
                
                $('input[name="test"]').prop('disabled', true);
                
                $('.next-button').removeClass('hidden');
                
                if ($(this).val() == STORE[i-1].correct) {
                    $('.js-answer').html('You are correct!');
                    correctScore += 1;
                }  else {
               $('.js-answer').html(`You are incorrect, the correct answer is ${STORE[i-1].correct}`);
                 incorrectScore += 1;
            };
        });
        $('.question-number').html(i);
        $('.stored-scored').html(correctScore);
        $('.stored-incorrect').html(incorrectScore);
        
    });

    



};








//passed the quiz

function quizResults () {
    $('.test-score-button').on('click', function(event) {
        const results = (correctScore / i) * 100;
        $('.main').html(`Your final grade is: ${results}%`);
        $('.test-score-button').addClass('hidden');
        $('.reset').removeClass('hidden');
        
    });
};
 

//reset the quiz

function resetQuiz() {
    $('.reset').on('click', function (event) {
        location.reload(true);
    });
};

function generateQuiz() {
    hideStartButton();
    presentQuestion();
    quizResults();
    resetQuiz();
};

$(generateQuiz());