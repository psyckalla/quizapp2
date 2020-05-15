'use strict'

const STORE = {questionNumber: 0, correctScore: 0, incorrectScore: 0, inputVal: '', questions:[
{question: "How many wives did Henry VIII have?", 
options: [" A) 4", " B) 1", " C) 8", " D) 6"], 
correct: "D"}, 
{question: "Henry VIII was succeeded by:", 
options: [" A) Mary I of England", " B) Edward VI of England", " C) Elizabeth I of England", " D) Mary Queen of Scots"], 
correct: "B"},
{question: "Henry VIII annuled his marriage to:", 
options: [" A) Catherine of Aragorn", " B) Jane Seymour", " C) Anne Boleyn", " D) Anne of Cleves"], 
correct: "A"},
{question: "Which of Henry VIII's wives gave birth to his heir?",
options: [" A) Catherine of Aragorn", " B) Anne Boleyn", " C) Jane Seymour", " D) Anne of Cleves"],
correct: "C"},
{question: "Which wife did Henry VIII execute?",
options: [" A) Catherine of Aragorn", " B) Anne Boleyn", " C) Jane Seymour", " D) Anne of Cleves"],
correct: "B"}]};

//see opening screen then press start
function clickStart() {
    $('.js-start-button').on('click', function(event) {
        hideStartButton();
        overallQuestionStatus();

    });
};

//removing the start button

function hideStartButton() {
    $('.js-start-button').addClass('hidden');
};



// adding 1 to the question number for appearances
function updateQuestionNumber() {
    const addedOne = STORE.questionNumber += 1;
    $('.js-question-number').html(addedOne);
};




//pressing start reveals first question and options
function overallQuestionStatus () {
    
    const thisNumber = STORE.questionNumber - 1;

if ((thisNumber) < 4) {
    updateQuestionNumber();
    
        renderQuestions();
        clickOption();
    } else if ((thisNumber) == 5){
        
        lastQuestion();

    } else {
        endQuiz();
    };
    
    
};

function renderQuestions() {
    
    $('.main').html(`<p class="questions">${STORE.questions[STORE.questionNumber - 1].question}<div class="js-questions"></p>
        <label for="test">Pick one option:</label><br>
        <input class="option-questions big" name="test" type="radio" value="A" />${STORE.questions[STORE.questionNumber - 1].options[0]}<br>
        <input class="option-questions big" name="test" type="radio" value="B" />${STORE.questions[STORE.questionNumber - 1].options[1]}<br>
        <input class="option-questions big" name="test" type="radio" value="C" />${STORE.questions[STORE.questionNumber - 1].options[2]}<br>
        <input class="option-questions big" name="test" type="radio" value="D" />${STORE.questions[STORE.questionNumber - 1].options[3]}</div>`);
        
};


//clicking on an option logs the value
function clickOption() { 
    $('input[name="test"]').on('click', function(event) {
        STORE.inputVal = $(this).val();
        console.log(STORE.inputVal);
        disableOptions();
        revealAnswer();
        showNextButton();
    });
};

//clicking on an option disables the other options
function disableOptions() {
    $('input[name="test"]').prop('disabled', true);
};



//and reveals the next button 
function showNextButton() {
    $('.js-next-button').removeClass('hidden');
};

//hides the next button
function hideNextButton() {
    $('.js-next-button').addClass('hidden');
};



//as well as the answer to the question, 
function revealAnswer() {
    const actualQuestion = STORE.questionNumber - 1;
    console.log(actualQuestion);
        if ((STORE.inputVal) == STORE.questions[STORE.questionNumber - 1].correct) {
            $('.js-answer').html('You are correct!');
            
console.log('this ran');
            updateCorrect();
        }  else {
            $('.js-answer').html(`You are incorrect, the correct answer is ${STORE.questions[STORE.questionNumber - 1].correct}`);
            updateIncorrect();
};
};



//which also updates the incorrect and correct
function updateCorrect(){
    STORE.correctScore += 1;
    $('.js-stored-score').html(STORE.correctScore);
}

function updateIncorrect() {
    STORE.incorrectScore += 1;
    $('.js-stored-incorrect').html(" " + STORE.incorrectScore);

}



//pressing the next button reveals the next question and options, 
function clickNext() {
    $('.js-next-button').on('click', function(event) {
        
        overallQuestionStatus();
        hideNextButton();
        removeCorrection();
        

    })
};



//erases the answer,

function removeCorrection() {
     $('.js-answer').empty();
 };


//updates the question number, 


//updates correct 
function updateCorrectNumber() {
    $('.js-stored-score').html(STORE.correctScore);

};



//and the incorrect

function updateIncorrectNumber() {
    $('.js-stored-incorrect').html(STORE.incorrectScore);

};



//getting to question 5 then switches to the 'you're done' screen

function endQuiz() {
    
    const endOfQuizGrade = (STORE.correctScore/STORE.questionNumber) * 100
    $('.main').html(`<p class="answers">Congratulations! You have finished the quiz. Your score is ${endOfQuizGrade}%</p>`)
    restartQuiz();

};

function showFinishQuiz() {
    $('.js-finish-quiz').removeClass('hidden');
};

//'you're done' shows the final score, and offers a reset button

function restartQuiz() {
    $('.js-reset').removeClass('hidden');
    $('.js-reset').click(function(){
        location.reload(true);
    });
};

function lastQuestion() {
    hideNextButton();
    showFinishQuiz();


};








function generateQuiz() {
    clickStart();
    clickNext();
    
    
    
};

$(generateQuiz());

