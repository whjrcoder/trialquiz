const questions = [
    {
        question: "Who was the first President of India?",
        answers: [
            {text: "APJ Abdul Kalam", correct: false},
            {text: "Sarvepalli Radhakrishnan", correct: false},
            {text: "Dr. Rajendra Prasad", correct: true},
            {text: "Pranab Mukharjee", correct: false},
        ]
    },
    {
        question: "Who are president and vice president of india in year 2023?",
        answers: [
            {text: "Droupadi Murmu and Jagdeep Dhankhar", correct: true},
            {text: "Ram Nath Kovind and Jagdeep Dhankhar", correct: false},
            {text: "Ram Nath Kovind and Muppavarapu Venkaiah Naidu", correct: false},
            {text: "Droupadi Murmu and Muppavarapu Venkaiah Naidu", correct: false},
        ]
    },
    {
        question: "Where in the world can you find Friday before Thursday?",
        answers: [
            {text: "In a dictionary.", correct: true},
            {text: "In a calender", correct: false},
            {text: "In a book", correct: false},
            {text: "NO WHERE!!", correct: false},
        ]
    },
    {
        question: "Two fathers and two sons sit down for dinner. They eat exactly three pieces of bread, yet they all had a slice each. How?",
        answers: [
            {text: "One is a GrandFather", correct: true},
            {text: "Because one of them died", correct: false},
            {text: "One of the sons went away", correct: false},
            {text: "THE QUESTION IS WRONG", correct: false},
        ]
    },
    {
        question: "Who is the defence of india in year 2023?",
        answers: [
            {text: "Droupadi Murmu", correct: false},
            {text: "Jagdeep Dhankhar", correct: false},
            {text: "Rajnath Singh", correct: true},
            {text: "Arun Jaitley", correct: false},
        ]
    },
    {
        question: "Who is home affairs minister of india in year 2023?",
        answers: [
            {text: "Amit Shah", correct: true},
            {text: "Nitin Gadkari", correct: false},
            {text: "Pankaj Singh", correct: false},
            {text: "I DON'T KNOW", correct: false},
        ]
    },
    {
        question: "What is the only word in the dictionary that is spelt incorrectly?",
        answers: [
            {text: "There is no such word", correct: false},
            {text: "I dont know", correct: false},
            {text: "Incorrect", correct: false},
            {text: "Incorrectly", correct: true},
        ]
    },
    {
        question: "Who is Arvind Kejriwal?",
        answers: [
            {text: "A human", correct: false},
            {text: "Chief minister of Delhi", correct: true},
            {text: "I DONT KNOW", correct: false},
            {text: "He is a member of congress", correct: false},
        ]
    },
    {
        question: "What part of the road do ghosts most love to travel?",
        answers: [
            {text: "Heven", correct: false},
            {text: "To the Titanic", correct: false},
            {text: "The places he/she was un able to travel when they were alive", correct: false},
            {text: "Dead Ends", correct: true},
        ]
    },
    {
        question: "Why is Mahatma Gandhi called Father of the nation?",
        answers: [
            {text: "Because he freed us from the british rule", correct: false},
            {text: "Because he was a foreigner", correct: false},
            {text: "Because he lead movement leading to indipendence of india", correct: true},
            {text: "Because he used voilance", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;    
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = 'you scored $(score) out of ${question.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();