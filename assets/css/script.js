var startQuiz = document.querySelector("#start")
var startPage = document.querySelector("#quiz-page")
var questionBank = document.querySelector("#question-bank")
var quizContainer= document.getElementById("quiz-container")
var question = document.getElementById("question");
var optionA = document.querySelector('#optionA');
var optionB = document.querySelector('#optionB');
var optionC = document.querySelector('#optionC');
var optionD = document.querySelector('#optionD');
var index = 0

startQuiz.addEventListener('click', beginQuiz) 
function startQuiz(){
    start.style.display = "none";
    timerEl = 99;
    timerEl = setInterval()
    quiz.style.display = "block";
    console.log('hello');
    quiz.style.display = "flex";

    renderQuestion(currentQuestionIndex);
}

function setTime() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            logScore();
        }
    }, 1000); 
}

var questionBank = [{
    answer: "2. <script>",
    prompt: "What tag is used in HTML to link your javascript file?",
    choices: ["1. <h1>","2. <script>","3. <src>","4. <link>"]
}, 
{
    answer: "3. function ()",
    prompt: "What is the correct syntax for a function?",
    choices: ["1. function='","2. var = function ","3. function ()","4. function.var"]
}, 

{ 
    answer: "'1. ==='",
    prompt: "How would I show that two strings or values have a strict equal operator?",
    choices: ["1.===","2. == ","3.!==","4. /="]
},
{
    answer: '2. []',
    prompt: 'What symbol would I see to let me know I am dealing with an array?',
    choices: ["1. {}", "2. []", "3. <> ", "4. x"]
},
{
    answer: '3. 1995',
    prompt: 'What year was Javascript introduced to HTML?',
    choices: ["1. 1999", "2. 2001", "3. 1995", "4. 1988"]
},
];


startQuiz.addEventListener("click", startQuiz){
    console.log("Start my quiz")
    startPage.style.display ="none"
    questionIndex = 0
    showQuestion()
}


function showQuestion(){
    console.log("Should be showing question")
    console.log("Question index should be 0 currently")
    console.log(questionIndex)
    //what question number to show
    console.log(questionBank[questionIndex].choices[3])

}
//something needs an event listener to trigger this
function answerSelected(event){
    event.preventDefault()
    //check if its correct or not

    //if it's correct

    //if it's incorrect === show incorrect on the screen

    //figure out how to go to the next question
    //showQuestion()
}

console.log(document.getElementById("start-btn"))

document.getElementById("start-btn").addEventListener("click", startQuiz)


