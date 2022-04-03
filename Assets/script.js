var start_time = 120;
var start_score = 0;
var correct_answers = 0;
var timerInterval = 0;

var questions = [
    {
        question: "Which animal is known as the Ship of the Desert?",
        answers: [
            {text: "camel", correct: true},
            {text: "horse", correct: false},
            {text: "lion", correct: false},
            {text: "tiger", correct: false}
        ]
    },
    
    {
        question: "How many days are there in a week?",
        answers: [
            {text: "7", correct: true},
            {text: "8", correct: false},
            {text: "9", correct: false},
            {text: "12", correct: false}
        ]
    },
    {
        question: "Name the largest planet of our Solar System?",
        answers: [
            {text: "Mars", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Earth", correct: false},
            {text: "Pluto", correct: false}
        ]
    },
    {
        question: "In which part of your body would you find the cruciate ligament?",
        answers: [
            {text: "Shoulder", correct: false},
            {text: "Hands", correct: false},
            {text: "Knee", correct: true},
            {text: "Neck", correct: false}
        ]
    },
    {
        question: "How many of Henry VIII's wives were called Catherine?",
        answers: [
            {text: "Joanne", correct: false},
            {text: "Sia", correct: false},
            {text: "Elsa", correct: false},
            {text: "Olivia", correct: true}
        ]
    },
    {
        question: "In which European country would you find the Rijksmuseum?",
        answers: [
            {text: "Netherlands", correct: true},
            {text: "USA", correct: false},
            {text: "England", correct: false},
            {text: "Russia", correct: false}
        ]
    },
    {
        question: "What is the capital of New Zealand?",
        answers: [
            {text: "Wellington", correct: true},
            {text: "Wahsington", correct: false},
            {text: "Paris", correct: false},
            {text: "Capetown", correct: false}
        ]
    },
    {
        question: "From what grain is the Japanese spirit Sake made?",
        answers: [
            {text: "camel", correct: false},
            {text: "horse", correct: false},
            {text: "Rice", correct: true},
            {text: "tiger", correct: false}
        ]
    },
]




var start_btn = document.querySelector("#start-btn");
var landing_page = document.querySelector(".Landing_page");
var question_page = document.querySelector(".question_container");
var timer = document.querySelector("#time");
var question = document.querySelector("#question");
var answers_ = Array.from(document.querySelectorAll(".answer"));


// console.log(answer)
// console.log(choices);
console.log(answers_);


function displayTimer(){
    timer.textContent = start_time;
}

function startTime(){
    clearInterval();
    timerInterval = setInterval(function(){
    console.log(--start_time);
    if (start_time <= 0){
        clearInterval(timerInterval)
    }
    },1000);

    displayTimer();

}
function resetScore(){
    start_score = 0;
}
var getRandomquestion = Math.floor(Math.random()* (questions.length));

function startQuestion(){
    question.textContent = questions[getRandomquestion].question;
    
   }

answers_.forEach(answer=> {
    answer.innerHTML = questions[getRandomquestion].answers[getRandomquestion].text;
})
start_btn.addEventListener("click",function(){
    landing_page.setAttribute("class","hidden");
    question_page.setAttribute("class","visible");
    // startTime();
    resetScore();
    startQuestion();
    // startAnswer();
})



 
