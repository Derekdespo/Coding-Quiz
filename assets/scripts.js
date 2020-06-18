// This object will hold all the info for each question on the quiz
// Will call on this information later in the code
var questions = [
    {
        title: "What is a good library for simplifying Javascript code?",
        choices: ["jTheory", "jSonDerulo", "jQuery", "jQuantatamela"],
        answer: "jQuery"
    },
    {
        title: "How do you set a value for a variable? Do you use:",
        choices: ["a semi-colon", "an equal sign", "two equal signs", "three equal signs"],
        answer: "an equal sign"
    },
    {
        title: "What kind of language is Javascript?",
        choices: ["a styling language", "a formatting language", "an event language", "a foreign language"],
        answer: "an event language"
    },
    {
        title: "What data type includes the values true and false?",
        choices: ["decimal", "string", "integer", "boolean"],
        answer: "boolean"
    },
    {
        title: "We can see the words 'if' and 'else' in what kind of statements?",
        choices: ["Typical", "Conditional", "Irrational", "Loop"],
        answer: "Conditional"
    },
    {
        title: "Math.random generates a number between what?",
        choices: ["1-10", "0-10", "0-1", "0-100"],
        answer: "0-1"
    },
    {
        title: "What does Math.floor do?",
        choices: ["rounds up to the nearest integer", "rounds to the nearest integer", "rounds down to the nearest integer"],
        answer: "rounds down to the nearest integer"
    },
    {
        title: "In an HTML document, where does the Javascript code go?",
        choices: ["on the bottom of the page", "in the header", "between the <script></script> tags", "in the css document"],
        answer: "between the <script></script> tags"
    },
];

// I set up a couple of elements on the quiz.html
// We will need to tap into them, so that they can dynamically change as each question is displayed
// Below is the tap in using querySelector
// Connect to the container element
var containerEl = document.querySelector(".container");
// Connect to the timer element
var timerEl = document.querySelector(".timer");
// Connect to the section element with the class score
var scoreEl = document.querySelector(".score");


// Create dynamic elements
var questBlock = document.createElement("p");

// Global Elements
var currentTime
var index = 0
var whatQ = -1
var result = 0;


// Set up a variable that can serve as the starting time
var startTime = 100;
// Create a function that allows the interval to decrease in decrements of one
function setTime() {
    // The variable timeInt will run a function that allows the startTime variable to decrease in intervals of one
    var timeInt = setInterval(function () {
        startTime--;
        // This will allow the hooked timer element to have text printed into it 
        timerEl.textContent = "Timer :  " + startTime + " " + "  seconds remaining";

        if (startTime === 0 || startTime < 0) {
            clearInterval(timeInt);
            sendMessage();
        }
        else if (whatQ === questions.length) {
            setTimeout();
        }
    }, 1000);
}
// This message should appear once the timer clock reaches zero
function sendMessage() {
    timerEl.textContent = "Loser!!";
}
setTime();

// Have the questions display on the screen with buttons for the choices
// Create a function for displaying the questions
function nextQuest() {
    // Declaring a variable that stores the current question from the questions object
    var currentQuest = questions[index];
    // Keep the container element empty
    containerEl.textContent = "";
    // Need to put the current question title in ther questBlock element
    questBlock.textContent = currentQuest.title;
    // Append questBlock to the Container Element so that it shows on the page
    containerEl.appendChild(questBlock);
    // Need to create an element that will hold the choices for each question
    var answerDiv = document.createElement("div");
    // A for loop can be used to make buttons for the choice options
    for (let i = 0; i < currentQuest.choices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.classList.add("choiceBtn");
        answerBtn.textContent = currentQuest.choices[i];
        answerDiv.appendChild(answerBtn);
    }

    containerEl.appendChild(answerDiv)
};

nextQuest();


function checkAnswer(event) {

    if (event.target.matches(".choiceBtn")) {
// Logic to compare if their answer is right
var newDiv = document.createElement("div");
newDiv.setAttribute("class", "ndiv");
scoreEl.appendChild(newDiv);
    };
// if the answer is correct
if (event.target.textContent === questions[index].answer) {
    result++;
    document.querySelector(".ndiv").innerHTML = "Nice Job!";
    // wrong answer
}
else if (event.target.textContent !== questions[index].amswer) {
    startTime = startTime - 15;
    newDiv.querySelector(".ndiv").innerHTML = "Wrong Answer bud! Deduct 15 seconds from your score!";
}
// Next question

index++
nextQuest()
    
}












// Event to occur when a choice button is clicked
document.addEventListener("click", checkAnswer);