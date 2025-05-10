const questions = [
    {
        question: "What is my name?",
        answers: [
            { text: "Swayam", correct: true },
            { text: "Nitin", correct: false },
            { text: "nanam", correct: false },
            { text: "Sanyam", correct: false }
        ]
    },
    {
        question: "What do I eat?",
        answers: [
            { text: "Rice", correct: false },
            { text: "Chicken", correct: false },
            { text: "Paneer", correct: false },
            { text: "human", correct: true }
        ]
    },
    {
        question: "What am I?",
        answers: [
            { text: "human", correct: true },
            { text: "animal", correct: false },
            { text: "bird", correct: false },
            { text: "alien", correct: false }
        ]
    },
    {
        question: "Where do I live?",
        answers: [
            { text: "on land", correct: false },
            { text: "in water", correct: false },
            { text: "in my house", correct: true },
            { text: "in space", correct: false }
        ]
    }
];

const questionElement = document.querySelector("#questions");
const answerButtons = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    answerButtons.innerHTML = ''; // Clear previous answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
    });
}
startQuiz();
