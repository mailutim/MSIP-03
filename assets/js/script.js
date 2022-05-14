const quizData = [
    {
        question: "Which command should you use to display the current path of your current directory?",
        a: "pwd",
        b: "cd",
        c: "ls",
        d: "touch", 
        correct: "a",  
    },
    {
       question: "Which command should you use to list all files of your current directory?",
        a: "pwd",
        b: "cd",
        c: "ls",
        d: "touch" ,
        correct: "c",
    },
    {
       question: "Which command should you use to display the content of a file?",
       a:"pwd",
       b: "less",
       c: "cd",
       d: "ls",
       correct: "b",
    },
    {
       question: "Which command should you use to delete a directory?",
       a: "cp",
       b: "mv",
       c: "rm",
       d: "rmdir",
       correct: "d",
    },
];

const quiz = document.getElementById('quizdiv');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('quizquestion');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

// let currentQuiz = 3
// let score = 0

// startQuiz()
// function startQuiz() {
// const currentQuestion = quizData[currentQuiz]

// questionEl.innerText = currentQuestion.question
// a_text.innerText = currentQuestion.a
// b_text.innerText = currentQuestion.b
// c_text.innerText = currentQuestion.c
// d_text.innerText = currentQuestion.d
}